import React from 'react'
import ReacStars from 'react-rating-stars-component'

import picTeste from '../../assets/logo.svg'

import { Restaurant, RestaurantInfo, Title, Address, RestaurantPic } from './styles';

const RestaurantCard = () =>
  <Restaurant>
    <RestaurantInfo>
      <Title>Nome do restaurante</Title>
      <ReacStars count={5} isHalf activeColor="#e7711c" edit={false} value={4} />
      <Address>rua exemplo, numero teste</Address>
  </RestaurantInfo>
  <RestaurantPic src={picTeste} alt="foto do restaurante" />
  </Restaurant>

export default RestaurantCard;