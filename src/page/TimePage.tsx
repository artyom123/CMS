import React from 'react';

import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Menu from '../components/menu/Menu';

const TimePage = () => (
  <>
    <Header />
    <Menu />
    <h1 style={{paddingTop: "60px"}}>TimePage</h1>
    <Footer />
  </>
);

TimePage.displayName = 'TimePage';

export default TimePage;
