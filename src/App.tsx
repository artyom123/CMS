import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './icons/icons';

import HomePage from './page/HomePage';
import LoginPage from './page/LoginPage';
import NotFoundPage from './page/NotFoundPage';
import ClientsPage from './page/ClientsPage';
import EmployeesPage from './page/EmployeesPage';
import EmployeePage from './page/EmployeePage';
import SalaryPage from './page/SalaryPage';
import SchedulePage from './page/SchedulePage';
import StatisticsPage from './page/StatisticsPage';
import TimePage from './page/TimePage';
import SettingUserPage from './page/SettingUserPage';

const App = () => (
  <>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/clients" component={ClientsPage} />
        <Route exact path="/employees" component={EmployeesPage} />
        <Route path="/employees/:id" component={EmployeePage} />
        <Route exact path="/salary" component={SalaryPage} />
        <Route exact path="/schedule" component={SchedulePage} />
        <Route exact path="/statistics" component={StatisticsPage} />
        <Route exact path="/time" component={TimePage} />
        <Route exact path="/setting-user" component={SettingUserPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  </>
);

App.displayName = 'App';

export default App;
