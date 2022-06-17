import React from 'react';
import './Navigation.scss';
import { WishLink } from '../wish-link/wish-link';

const Navigation = () => (
  <nav className="navigation">
    <a className="navigation__link" href="/test-shop1/#">Home</a>
    <a className="navigation__link" href="/test-shop1/#/contact">Contact</a>
    <a className="navigation__link" href="/test-shop1/#/login">LogIn</a>
    <WishLink />
  </nav>
);

export default Navigation;
