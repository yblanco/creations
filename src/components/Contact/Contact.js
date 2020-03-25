import React from 'react';
import { Content, Container, Columns, Image } from 'react-bulma-components';

import ContactForm from './ContactForm';

import info from './images/example.png';

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
        <Columns className="is-vcentered">
          <Columns.Column>
            <Image alt="text" src={info} size={128} />
          </Columns.Column>
          <Columns.Column>
            <ContactForm />
          </Columns.Column>
        </Columns>
      </Container>
    </Content>
  );
};
