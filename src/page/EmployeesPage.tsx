import React, { useEffect, useState } from 'react';

import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Menu from '../components/menu/Menu';
import Employees from '../components/employees/Employees';

import EMPLOYEES from '../data/employees';

const EmployeesPage = () => {
  const [employees, setEmployees] = useState<any>([]);

  useEffect(() => {
    setEmployees(EMPLOYEES);
  }, []);

  return (
    <>
      <Header />
      <Menu />
      { employees && <Employees employees={employees}/> }
      <Footer />
    </>
  );
};

EmployeesPage.displayName = 'EmployeesPage';

export default EmployeesPage;
