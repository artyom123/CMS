import React from 'react';

import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Menu from '../components/menu/Menu';

const ClientsPage = () => (
  <>
    <Header />
    <Menu />
    <h1 style={{paddingTop: "60px"}}>ClientsPage</h1>
    <Footer />
  </>
);

ClientsPage.displayName = 'ClientsPage';

export default ClientsPage;
