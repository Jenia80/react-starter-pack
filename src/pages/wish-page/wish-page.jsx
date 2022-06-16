import React from 'react';
import { useSelector } from 'react-redux';
import WishItem from '../../components/wish-item/wish-item';
import './wish-page.scss';

const WishPage = () => {
  const items = useSelector(state => state.cart.itemsInCart);

  if (items.length < 1) {
    return <h1>You need to choose something, please</h1>;
  }

  return (
    <div className="wish-page">
      {items.map(drink => <WishItem drink={drink} />)}
    </div>
  );
};

export default WishPage;
