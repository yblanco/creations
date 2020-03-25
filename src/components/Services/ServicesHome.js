import React from 'react';

import { Container, Columns, Heading } from 'react-bulma-components';


import { translate } from "react-translate";

import ServicesItem from './ServicesItem';

import './services.css'

export default translate('services')(({ t }) => {
  return (
    <Container className="section">
      <Heading size={4} className="has-text-centered	">
        {t('services_title')}
      </Heading>
      <Columns>
        <Columns.Column>
          <ServicesItem type="design"  />
        </Columns.Column>
        <Columns.Column>
          <ServicesItem type="develop" />
        </Columns.Column>
        <Columns.Column>
          <ServicesItem type="consulting" />
        </Columns.Column>
      </Columns>
    </Container>
  );
})
