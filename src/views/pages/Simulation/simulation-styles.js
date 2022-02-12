import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 30px;
`;

export const ImageCardContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const ImageCard = styled.Image`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height / 2}px;
`;

export const TextCard = styled.View`
  width: ${(props) => props.width}px;
  padding: 25px 30px 90px 30px;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  background-color: rgba(255, 255, 255, 0.7);
`;

export const TitleCard = styled.Text`
  font-family: 'Roboto-Black';
  font-weight: bold;
  font-size: 30px;
  color: #43b1fa;
`;

export const PlanPrice = styled.Text`
  font-family: 'Roboto-Black';
  font-weight: bold;
  font-size: 45px;
  color: #43b1fa;
`;

export const TextBody = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 16px;
  padding-top: 20px;
  color: #4d4c5c;
`;

export const ButtonContainer = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  padding-top: 10px;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.7);
`;

export const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  margin: 0px 10px 20px 10px;
  width: ${(props) => (props.size === 'sm' ? '180px' : '100%')};
  padding: 20px 10px;
  background-color: ${(props) =>
    props.color === 'yellow' ? '#f4bb50' : '#43b1fa'};
`;

export const TextButton = styled.Text`
  color: white;
  font-weight: bold;
  text-transform: uppercase;
`;

export const HeadlineContainer = styled.View`
  height: 450px;
`;

export const Headline = styled.View`
  padding-top: 300px;
`;

export const HeadlineText = styled.Text`
  padding-top: 10px;
  font-family: 'Roboto-Black';
  font-weight: bold;
  line-height: 50px;
  font-size: 40px;
  text-transform: uppercase;
  color: #43b1fa;
`;

export const Label = styled.Text`
  margin-right: 15px;
`;
export const Select = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Form = styled.View`
  flex: 1;
  padding-bottom: 15px;
  border-bottom-width: 2px;
  border-color: #eee;
`;
