import React from 'react';
import './Navigation.scss';
import { WishLink } from '../wish-link/wish-link';

const Navigation = () => (
  <nav className="navigation">
    <a className="navigation__link" href="/">Home</a>
    <a className="navigation__link" href="contact">Contact</a>
    <a className="navigation__link" href="login">LogIn</a>
    <WishLink />
  </nav>
);

export default Navigation;
