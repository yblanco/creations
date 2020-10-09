import React from 'react';
import { Content, Container, Columns } from 'react-bulma-components';

import ContactForm from './ContactForm';
import InfoContact from './InfoContact';

import bg from './images/bg.png';

const style = {
  backgroundImage: `url(${bg})`,
  backgroundPosition: "center left",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
}

export default () => {
  return (
    <Content style={style}>
      <Container className="section">
        <Columns>
          <Columns.Column>
            <InfoContact />
          </Columns.Column>
          <Columns.Column>
            <ContactForm />
          </Columns.Column>
        </Columns>
      </Container>
    </Content>
  );
};
