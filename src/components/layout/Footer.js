import React from 'react';
import { Footer, Container, Content, Columns } from 'react-bulma-components';
import Moment from 'react-moment';

import { translate } from "react-translate";

import Members from './Members';

import bg from './images/footer.png';

import './styles/footer.css';

const style = {
  background: `url(${bg})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'
}

export default translate('footer')(({ t }) => (
  <Content style={style} className='footer-full'>
    <Columns className='member-footer'>
      <Columns.Column size={2} offset={2}>
        <Members />
      </Columns.Column>
      <Columns.Column size={2} offset={1}>
        <Members />
      </Columns.Column>
      <Columns.Column size={2} offset={1}>
        <Members />
      </Columns.Column>
    </Columns>
    <Footer className="notification is-dark">
      <Container>
        <Content>
          {t('powered_by')}
          {' '}
          Creations
          {' '}
          <Moment format="Y" />
          {' '}
          ❤
        </Content>
      </Container>
    </Footer>
  </Content>
));
