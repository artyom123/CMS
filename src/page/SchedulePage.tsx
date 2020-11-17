import React from 'react';

import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Menu from '../components/menu/Menu';

const SchedulePage = () => (
  <>
    <Header />
    <Menu />
    <h1 style={{paddingTop: "60px"}}>SchedulePage</h1>
    <Footer />
  </>
);

SchedulePage.displayName = 'SchedulePage';

export default SchedulePage;
