import React from 'react';

import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Menu from '../components/menu/Menu';

const SettingUserPage = () => (
  <>
    <Header />
    <Menu />
    <h1 style={{paddingTop: "60px"}}>SettingUserPage</h1>
    <Footer />
  </>
);

SettingUserPage.displayName = 'SettingUserPage';

export default SettingUserPage;
