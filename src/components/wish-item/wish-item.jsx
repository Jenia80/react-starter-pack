
/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteItemFromCart } from '../../redux/cart/reducer';
import './wish-item.scss';

const OrderItem = ({ drink }) => {
  const item = drink.strDrink;
  const img = drink.strDrinkThumb;

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteItemFromCart(drink.idDrink));
  };

  return (
    <div className="wish-item">
      <div className="wish-item__wrapper">
        <div
          className="wish-item__box"
          style={{ backgroundImage: `url(${img})` }}
        />
        <span>{item}</span>

        <div className="wish-item__button">
          <button
            className="wish-item__button--link button"
            type="button"
            onClick={handleClick}
          >
            I change my mind
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
