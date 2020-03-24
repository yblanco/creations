import React from 'react';
import { Content } from 'react-bulma-components';

import BudgetHome from '../components/Budget/BudgetHome';
import ServicesHome from '../components/Services/ServicesHome';



const Home = () => {
  return (
    <Content>
      <BudgetHome />
      <ServicesHome />
    </Content>
  );
};

export default Home;
