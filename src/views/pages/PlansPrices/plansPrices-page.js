import React from 'react';
import {StatusBar, Animated, Dimensions, View, StyleSheet} from 'react-native';

import image3 from '../../../assets/img/talkMore120Img.png';
import image1 from '../../../assets/img/talkMore30Img.png';
import image2 from '../../../assets/img/talkMore60Img.png';
import {
  Container,
  ImageContainer,
  ImageItem,
  TextContainer,
  Title,
  OriginalPrice,
  PlanPrice,
  TextBody,
  Button,
  TextButton,
  ButtonContainer,
} from './plansPrices-style.js';

const {width, height} = Dimensions.get('screen');
const originalPrice = 30;
const talkMore30Price = 30;
const talkMore60Price = 30;
const talkMore120Price = 30;
const areaCodeOrigin = 30;
const areaCodeDestiny = 30;
const fee = 10;

const data = [
  {
    image: image1,
    title: 'FaleMais30',
    minutes: 30,
    planPrice: talkMore30Price,
  },
  {
    image: image2,
    title: 'FaleMais60',
    minutes: 60,
    planPrice: talkMore60Price,
  },
  {
    image: image3,
    title: 'FaleMais120',
    minutes: 120,
    planPrice: talkMore120Price,
  },
];

const imageW = width;
const imageH = imageW * 1.54;

export default function SimulationPage({navigation}) {
  const scrollX = React.useRef(new Animated.Value(0)).current;

  return (
    <Container>
      <StatusBar hidden />
      <View style={[StyleSheet.absoluteFillObject, {opacity: 0.6}]}>
        {data.map((image, index) => {
          const opacity = scrollX.interpolate({
            inputRange: [
              (index - 1) * width,
              index * width,
              (index + 1) * width,
            ],
            outputRange: [0, 1, 0],
          });
          return (
            <Animated.Image
              key={`image-${index}`}
              source={image.image}
              style={[StyleSheet.absoluteFillObject, {opacity}]}
              blurRadius={50}
            />
          );
        })}
      </View>
      <Animated.FlatList
        data={data}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: true},
        )}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <ImageContainer width={width} height={height}>
            <ImageItem
              source={item.image}
              width={imageW}
              height={imageH}
              style={{resizeMode: 'center'}}
            />
            <TextContainer width={width}>
              <Title>{item.title}</Title>
              <OriginalPrice>De R$ {originalPrice} por</OriginalPrice>
              <PlanPrice>R$ {item.planPrice}</PlanPrice>
              <TextBody>
                Com o plano {item.title}, você fala por {item.minutes} minutos e
                só paga R$
                {fee} + 10% pelos minutos excedentes através dos DDD's{' '}
                {areaCodeOrigin} e {areaCodeDestiny}
              </TextBody>
            </TextContainer>
          </ImageContainer>
        )}
      />
      <ButtonContainer>
        <Button>
          <TextButton>Contratar</TextButton>
        </Button>
      </ButtonContainer>
    </Container>
  );
}
