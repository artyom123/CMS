import React from 'react';

import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Menu from '../components/menu/Menu';

const StatisticsPage = () => (
  <>
    <Header />
    <Menu />
    <h1 style={{paddingTop: "60px"}}>StatisticsPage</h1>
    <Footer />
  </>
);

StatisticsPage.displayName = 'StatisticsPage';

export default StatisticsPage;
