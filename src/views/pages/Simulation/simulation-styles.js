import styled, { css } from 'styled-components/native';

export const ScrollView = styled.ScrollView`
  flex: 1;
`;

export const Container = styled.View`
  padding: 30px;
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

export const HeadlineContainer = styled.View`
  height: 450px;
`;
export const TextSelect = styled.Text`
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

export const Submit = styled.Pressable`
  justify-content: center;
  align-items: center;
  background: #f4bb50;
  border-radius: 4px;
  margin-left: 10px;
  padding: 20px 10px;
`;

export const TextButton = styled.Text`
  color: white;
  font-weight: bold;
  text-transform: uppercase;
`;
