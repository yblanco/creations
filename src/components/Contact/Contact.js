import React from 'react';
import { Container, Columns, Image } from 'react-bulma-components';

import ContactForm from './ContactForm';

import info from './images/example.png';


export default () => {
  return (
    <Container className="section">
      <Columns className="is-vcentered">
        <Columns.Column>
          <Image alt="text" src={info} size={128} />
        </Columns.Column>
        <Columns.Column>
          <ContactForm />
        </Columns.Column>
      </Columns>
    </Container>
  );
};
