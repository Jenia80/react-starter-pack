import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux';
import Home from './pages/home-page/home-page';
import Header from './components/Header/Header';
import WishPage from './pages/wish-page/wish-page';
import SignupForm from './pages/autorization/autorization';
import ContactUs from './pages/contact-me/contact-me';

import './App.scss';

export function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contact#" element={<ContactUs />} />
          <Route path="wish" element={<WishPage />} />
          <Route path="login#" element={<SignupForm />} />
        </Routes>
      </div>
    </Provider>
  );
}
