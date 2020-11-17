import React from 'react';

import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Menu from '../components/menu/Menu';

const SalaryPage = () => (
  <>
    <Header />
    <Menu />
    <h1 style={{paddingTop: "60px"}}>SalaryPage</h1>
    <Footer />
  </>
);

SalaryPage.displayName = 'SalaryPage';

export default SalaryPage;
