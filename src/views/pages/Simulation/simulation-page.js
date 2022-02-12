import React, { useState, useRef } from 'react';
import {
  Image,
  Alert,
  Dimensions,
  Animated,
  ScrollView,
  Text,
} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';

import api from '#services/api.js';

import Input from '#components/Input/index.js';

import imageLandingPage from '../../../assets/img/landing-page.png';
import talkMore120Img from '../../../assets/img/talkMore120Img.png';
import talkMore30Img from '../../../assets/img/talkMore30Img.png';
import talkMore60Img from '../../../assets/img/talkMore60Img.png';
import { formatPrice } from '../../../utils/format-numbers-util.js';
import {
  Headline,
  HeadlineText,
  Form,
  Select,
  Label,
  HeadlineContainer,
  TextButton,
  Container,
  ImageCardContainer,
  ImageCard,
  TextCard,
  TitleCard,
  PlanPrice,
  TextBody,
  Button,
  ButtonContainer,
} from './simulation-styles.js';

export default function Simulation() {
  const { width, height } = Dimensions.get('screen');
  const imageH = width * 1.54;
  const scrollX = React.useRef(new Animated.Value(0)).current;

  const areaCodes = ['011', '016', '017', '018'];

  const [callDuration, setCallDuration] = useState('');
  const [areaCodeOrigin, setAreaCodeOrigin] = useState('');
  const [areaCodeDestiny, setAreaCodeDestiny] = useState('');
  const [prices, setPrices] = useState('');

  const [ref, setRef] = useState(null);

  const simulationSection = useRef();

  const planPricesCards = [
    {
      originalPrice: prices.withoutTalkMore,
      fee: prices.fee,
      image: talkMore30Img,
      title: 'FaleMais30',
      minutes: 30,
      planPrice: prices.talkMore30,
    },
    {
      originalPrice: prices.withoutTalkMore,
      fee: prices.fee,
      image: talkMore60Img,
      title: 'FaleMais60',
      minutes: 60,
      planPrice: prices.talkMore60,
    },
    {
      originalPrice: prices.withoutTalkMore,
      fee: prices.fee,
      image: talkMore120Img,
      title: 'FaleMais120',
      minutes: 120,
      planPrice: prices.talkMore120,
    },
  ];

  const handleSubmit = async () => {
    try {
      const { data } = await api.post('/simulation', {
        areaCodeOrigin,
        areaCodeDestiny,
        callDuration,
      });

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
            <Label>DDD de Origem</Label>
            <SelectDropdown
              data={areaCodes}
              defaultButtonText="DDD"
              onSelect={(selectedAreaCodeOrigin) => {
                setAreaCodeOrigin(selectedAreaCodeOrigin);
              }}
            />
          </Select>
          <Select>
            <Label>DDD de Destino</Label>
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
              onSelect={(selectedAreaCodeDestiny) => {
                setAreaCodeDestiny(selectedAreaCodeDestiny);
              }}
            />
          </Select>
          <Label>Duração em Minutos</Label>
          <Input
            autoCorrect={false}
            keyboardType="numeric"
            autoCapitalize="none"
            placeholder="Duração"
            onSubmitEditing={() => handleSubmit()}
            onChangeText={setCallDuration}
            value={callDuration}
          />

          <Button onPress={() => handleSubmit()} color="yellow">
            <TextButton>Simular</TextButton>
          </Button>
        </Form>
      </Container>

      <Animated.FlatList
        data={planPricesCards}
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
          <ImageCardContainer width={width} height={height}>
            <ImageCard
              source={item.image}
              width={width}
              height={imageH}
              style={{ resizeMode: 'center' }}
            />
            <TextCard width={width}>
              <TitleCard>{item.title}</TitleCard>
              <Text>De {formatPrice(item.originalPrice)} por</Text>
              <PlanPrice>{formatPrice(item.planPrice)}</PlanPrice>
              <TextBody>
                Com o plano {item.title}, você fala por {item.minutes} minutos e
                só paga {formatPrice(item.fee)} + 10% pelos minutos excedentes
                através dos DDD's {areaCodeOrigin} e {areaCodeDestiny}
              </TextBody>
            </TextCard>
            <ButtonContainer>
              <Button color="yellow" size="sm">
                <TextButton>Contratar</TextButton>
              </Button>
              <Button color="blue" size="sm">
                <TextButton>Saber Mais</TextButton>
              </Button>
            </ButtonContainer>
          </ImageCardContainer>
        )}
      />
    </ScrollView>
  );
}
