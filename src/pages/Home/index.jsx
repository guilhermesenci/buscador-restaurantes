import React, { useState } from 'react'
import TextField, { Input } from '@material/react-text-field'
import MaterialIcon from '@material/react-material-icon'
import { useSelector } from 'react-redux'

import logo from '../../assets/logo.svg'
import { Card, RestaurantCard, Modal, Map } from '../../components'

import { Container, Search, Logo, Wrapper, Title, Carousel } from './styles'

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const [modalOpened, setModalOpened] = useState(true);
  const [query, setQuery] = useState(null);
  const { restaurants, restaurantSelected } = useSelector((state) => state.restaurants);
  const [placeId, setPlaceId] = useState(null);

  const settings = {
    dots: false,
    infite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };

  function handleChange(e) {
    if (e.key === 'Enter') {
      setQuery(inputValue);
    }
  }

  function handleOpenModal() {
    setPlaceId(placeId);
    setModalOpened(true);
  }

  return (
    <Wrapper>
      <Container>
        <Search>
          <Logo src={logo} alt="Logo do restaurante" />
          <TextField
            label="Pesquisar"
            outlined
            trailingIcon={<MaterialIcon role="button" icon="search" />}>
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleChange}
            />
          </TextField>
          <Title>Na sua área</Title>
          <Carousel {...settings}>
            {restaurants.map((restaurant) => <Card
              photo={restaurant.photos ? restaurant.photos[0].getUrl() : null}
              title={restaurant.name}
              key={restaurant.place_id}
            />)}
          </Carousel>
        </Search>
        {restaurants.map((restaurant) => (
          <RestaurantCard
            onClick={() => handleOpenModal(restaurant.place_id)}
            restaurant={restaurant}
          />
        ))}
      </Container>
      <Map query={query} placeId={placeId} />
      <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)}>
        <p>{restaurantSelected.name}</p>
        <p>{restaurantSelected.formatted_phone_number}</p>
        <p>{restaurantSelected.formatted_address}</p>
      </Modal>
    </Wrapper>
  )
};

export default Home;
