import React from 'react';
import { Footer, Container, Content, Columns, Heading } from 'react-bulma-components';
import Moment from 'react-moment';

import { translate } from "react-translate";

import Members from './Members';
import IconRRSS from './IconRRSS';

import bg from './images/footer.png';

import './styles/footer.css';

const rrss = ['twitter', 'linkedn', 'instagram', 'facebook', 'youtube'];

const style = {
  background: `url(${bg})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'
}

export default translate('footer')(({ t }) => (
  <Content style={style} className='footer-full'>
    <Container>
      <Columns className='member-footer'>
        <Columns.Column size={4}>
          <Members />
        </Columns.Column>
        <Columns.Column size={4}>
          <Members />
        </Columns.Column>
        <Columns.Column size={4}>
          <Members />
        </Columns.Column>
      </Columns>
    </Container>
    <Columns>
      <Columns.Column size={4}>
      </Columns.Column>
      <Columns.Column size={4}>
        <Heading size={4}>
          Creations
        </Heading>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sodales quam.
      </Columns.Column>
      <Columns.Column size={4}>
        <Heading size={4}>
          {t('services')}
        </Heading>
        {t('service_description')}
        <Columns>
          {rrss.map((item, i) => (
            <Columns.Column
              key={item}
              size={2}
            >
              <IconRRSS rs={item} />
            </Columns.Column>
          ))}
        </Columns>
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
