import React, { useState } from 'react'
import TextField, { Input } from '@material/react-text-field'
import MaterialIcon from '@material/react-material-icon'

import logo from '../../assets/logo.svg'
import picTeste from '../../assets/logo.svg'
import { Card } from '../../components'

import { Container, Search, Logo, Wrapper, Map, Title, Carousel } from './styles'

const Home = () => {
  const [inputValue, setInputValue] = useState('');

  const settings = {
    dots: false,
    infite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };

  return (
    <Wrapper>
      <Container>
        <Search>
          <Logo src={logo} alt="Logo do restaurante" />
          <TextField
            label="Pesquisar"
            outlined
            trailingIcon={<MaterialIcon role="button" icon="search" />}>
            <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
          </TextField>
          <Title>Na sua área</Title>
          <Carousel {...settings}>
            <Card photo={picTeste} title="teste teste teste" />
            <Card photo={picTeste} title="teste teste teste" />
            <Card photo={picTeste} title="teste teste teste" />
            <Card photo={picTeste} title="teste teste teste" />
            <Card photo={picTeste} title="teste teste teste" />
            <Card photo={picTeste} title="teste teste teste" />
          </Carousel>
        </Search>
      </Container>
      <Map />
    </Wrapper>
  )
};

export default Home;
