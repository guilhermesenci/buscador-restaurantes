import React from 'react'
import ReacStars from 'react-rating-stars-component'

import { Restaurant, RestaurantInfo, Title, Address, RestaurantPic } from './styles';

const RestaurantCard = ({ restaurant, onClick }) =>
  <Restaurant onClick={onClick}>
    <RestaurantInfo>
      <Title>{restaurant.name}</Title>
      <ReacStars count={5} isHalf activeColor="#e7711c" edit={false} value={restaurant.rating} />
      <Address>{restaurant.vicinity || restaurant.fomatted_address}</Address>
    </RestaurantInfo>
    <RestaurantPic src={restaurant.photos ? restaurant.photos[0].getUrl() : 'null'} alt="foto do restaurante" />
  </Restaurant>

export default RestaurantCard;