import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import WishList from '../wish-list/wish-list';
import './wish-link.scss';

export const WishLink = () => {
  const items = useSelector(state => state.cart.itemsInCart);
  const [isWishListVisible, setIsWishListVisible] = useState(false);
  const history = useNavigate();

  const handleClick = useCallback(() => {
    setIsWishListVisible(false);
    history('wish');
  }, [history]);

  return (
    <>
      <button
        className="navigation__link button"
        type="button"
        onClick={() => setIsWishListVisible(!isWishListVisible)}
      >
        Wish
      </button>
      {isWishListVisible && <WishList items={items} onClick={handleClick} />}
    </>
  );
};
