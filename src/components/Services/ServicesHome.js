import React from 'react';

import { Content, Container, Columns, Heading } from 'react-bulma-components';


import { translate } from "react-translate";

import ServicesItem from './ServicesItem';


import bg from './images/bg.png';
import bgLeft from './images/bg-left.png';


import './services.css'


const style = {
  backgroundImage: `url(${bg}), url(${bgLeft})`,
  backgroundPosition: "bottom right, top left",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
}

export default translate('services')(({ t }) => {
  return (
    <Content style={style} className='services'>
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
            <ServicesItem type="uiux" />
          </Columns.Column>
        </Columns>
      </Container>
    </Content>

  );
})
