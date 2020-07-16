import React from 'react';
import { Content } from 'react-bulma-components';

// import BudgetHome from '../components/Budget/BudgetHome';
import ServicesHome from '../components/Services/ServicesHome';
import Contact from '../components/Contact/Contact'
import PortfolioHome from '../components/Portfolio/PortfolioHome'




export default () => {
  return (
    <Content>
      <ServicesHome />
      <PortfolioHome />
      <Contact />
    </Content>
  );
};
