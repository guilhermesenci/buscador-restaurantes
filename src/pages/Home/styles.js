import styled from 'styled-components'

import Slider from 'react-slick'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`; 

export const Container = styled.aside `
  background-color: ${(props) => props.theme.colors.background};
  width: 360px;
  height: 100vh;
  overflow-y: auto;
`;

export const Search = styled.section `
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
  padding: 20px;
`;

export const Logo = styled.img`
  margin-bottom: 10px;
  height: 80px;
`;

export const Map = styled.div`
  background-color: red;
  width: 100%;
`;

export const Carousel = styled(Slider)`
  .slick-slide {
    margin-right: 5px;
  }
`;;

export const Title = styled.h1 `
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  font-size: 24px;
  font-weight: bold;
  line-height: 29px;
  margin: 16px 0;
  `;