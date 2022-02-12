import React, { useState, useRef } from 'react';
import { Image, Alert, Dimensions, Animated } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';

import api from '#services/biomeApi.js';

import Input from '#components/Input/index.js';

import imageLandingPage from '../../../assets/img/landing-page.png';
import image3 from '../../../assets/img/talkMore120Img.png';
import image1 from '../../../assets/img/talkMore30Img.png';
import image2 from '../../../assets/img/talkMore60Img.png';
import { formatPrice } from '../../../utils/format-numbers-util.js';
import {
  ImageContainer,
  ImageItem,
  TextContainer,
  Title,
  OriginalPrice,
  PlanPrice,
  TextBody,
  Button,
  ButtonContainer,
} from '../PlansPrices/plansPrices-style.js';
import {
  ScrollView,
  Headline,
  HeadlineText,
  Form,
  Select,
  TextSelect,
  HeadlineContainer,
  Submit,
  TextButton,
  Container,
} from './simulation-styles.js';

export default function SingUp({ navigation }) {
  const areaCodes = ['011', '016', '017', '018'];

  const [callDuration, setCallDuration] = useState('');
  const [areaCodeOrigin, setAreaCodeOrigin] = useState('');
  const [areaCodeDestiny, setAreaCodeDestiny] = useState('');

  const [prices, setPrices] = useState('');
  const [ref, setRef] = useState(null);

  const simulationSection = useRef();

  const { width, height } = Dimensions.get('screen');
  const imageW = width;
  const imageH = imageW * 1.54;
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const images = [
    {
      originalPrice: prices.withoutTalkMore,
      fee: prices.fee,
      image: image1,
      title: 'FaleMais30',
      minutes: 30,
      planPrice: prices.talkMore30,
    },
    {
      originalPrice: prices.withoutTalkMore,
      fee: prices.fee,
      image: image2,
      title: 'FaleMais60',
      minutes: 60,
      planPrice: prices.talkMore60,
    },
    {
      originalPrice: prices.withoutTalkMore,
      fee: prices.fee,
      image: image3,
      title: 'FaleMais120',
      minutes: 120,
      planPrice: prices.talkMore120,
    },
  ];

  const handleSubmit = async () => {
    try {
      const response = await api.post('/simulation', {
        areaCodeOrigin,
        areaCodeDestiny,
        callDuration,
      });
      const { data } = response;
      setPrices(data);
      ref.scrollTo({
        x: 0,
        y: height,
        animated: true,
      });
    } catch (error) {
      Alert.alert('Opss!', 'Fee not registered for the area codes informed');
    }
  };

  return (
    <ScrollView
      ref={(ref) => {
        setRef(ref);
      }}
    >
      <Container>
        <HeadlineContainer>
          <Image
            source={imageLandingPage}
            style={{
              height: 500,
              position: 'absolute',
              left: -500,
              top: -100,
              opacity: 0.8,
              resizeMode: 'center',
            }}
          />
          <Headline>
            <HeadlineText>Fale muito +</HeadlineText>
            <HeadlineText>Pague muito -</HeadlineText>
          </Headline>
        </HeadlineContainer>

        <Form>
          <Select>
            <TextSelect>DDD de Origem</TextSelect>
            <SelectDropdown
              data={areaCodes}
              defaultButtonText="DDD"
              onSelect={(selectedItem, index) => {
                setAreaCodeOrigin(selectedItem);
              }}
            />
          </Select>
          <Select>
            <TextSelect>DDD de Destino</TextSelect>
            <SelectDropdown
              data={areaCodes}
              defaultButtonText="DDD"
              buttonStyle={{
                padding: 15,
                height: 60,
                borderRadius: 4,
                marginTop: 15,
                marginBottom: 15,
              }}
              onSelect={(selectedItem, index) => {
                setAreaCodeDestiny(selectedItem);
              }}
            />
          </Select>
          <TextSelect>Duração em Minutos</TextSelect>
          <Input
            autoCorrect={false}
            keyboardType="numeric"
            autoCapitalize="none"
            placeholder="Duração"
            returnKeyType="next"
            value={callDuration}
            onChangeText={setCallDuration}
          />

          <Submit onPress={() => handleSubmit()}>
            <TextButton>Simular</TextButton>
          </Submit>
        </Form>
      </Container>
      <Animated.FlatList
        data={images}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true },
        )}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        ref={simulationSection}
        renderItem={({ item }) => (
          <ImageContainer width={width} height={height}>
            <ImageItem
              source={item.image}
              width={imageW}
              height={imageH}
              style={{ resizeMode: 'center' }}
            />
            <TextContainer width={width}>
              <Title>{item.title}</Title>
              <OriginalPrice>
                De {formatPrice(item.originalPrice)} por
              </OriginalPrice>
              <PlanPrice>{formatPrice(item.planPrice)}</PlanPrice>
              <TextBody>
                Com o plano {item.title}, você fala por {item.minutes} minutos e
                só paga {formatPrice(item.fee)} + 10% pelos minutos excedentes
                através dos DDD's {areaCodeOrigin} e {areaCodeDestiny}
              </TextBody>
            </TextContainer>
            <ButtonContainer>
              <Button>
                <TextButton>Contratar</TextButton>
              </Button>
            </ButtonContainer>
          </ImageContainer>
        )}
      />
    </ScrollView>
  );
}
