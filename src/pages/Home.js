import React from 'react';
import { Content } from 'react-bulma-components';

import BudgetHome from '../components/Budget/BudgetHome';
import ServicesHome from '../components/Services/ServicesHome';
import Contact from '../components/Contact/Contact'



export default () => {
  return (
    <Content>
      <BudgetHome />
      <ServicesHome />
      <Contact />
    </Content>
  );
};
