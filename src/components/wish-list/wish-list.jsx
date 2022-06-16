/* eslint-disable react/prop-types */
import React from 'react';
import './wish-list.scss';

const WishList = ({ items, onClick }) => (
  <div className="wishList">
    <div className="wishList__content">
      {
        items.length > 0 ? (
          <div>
            i already choose

            {items.length}

            coctails
          </div>
        ) : 'NO WISHES'
      }
    </div>
    {(items.length > 0) && (
      <div
        className="wishList__button"
        role="button"
        aria-hidden="true"
        onClick={onClick}
      >
        what did i choose ???
      </div>
    )}
  </div>
);

export default WishList;
