/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { setItemInCart } from '../../redux/cart/reducer';

export const DrinkBuy = ({ drink }) => {
  const dispatch = useDispatch();

  const handleClick = (event) => {
    event.stopPropagation();
    dispatch(setItemInCart(drink));
  };

  return (
    <div className="drinkCard__button">
      <button
        className="drinkCard__button--link button"
        type="button"
        onClick={handleClick}
      >
        Ohh Yes! I want it!
      </button>
    </div>
  );
};
