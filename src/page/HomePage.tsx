import React from 'react';

import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Menu from '../components/menu/Menu';

const HomePage = () => (
  <>
    <Header />
    <Menu />
    <h1 style={{paddingTop: "60px"}}>HomePage</h1>
    <Footer />
  </>
);

HomePage.displayName = 'HomePage';

export default HomePage;
