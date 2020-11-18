import React from 'react';

import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Menu from '../components/menu/Menu';

import Employee from '../components/employee/Employee';

const EmployeePage = () => (
  <>
    <Header />
    <Menu />
    <Employee />
    <Footer />
  </>
);

EmployeePage.displayName = 'EmployeePage';

export default EmployeePage;
