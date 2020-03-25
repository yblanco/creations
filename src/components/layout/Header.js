import React from 'react';
import { Content, Container, Columns, Image } from 'react-bulma-components';


import { Link } from 'react-router-dom';
import routes from '../../routes';

import './styles/header.css';

import IconRRSS from './IconRRSS';
import ItemLink from './ItemLink';

import bg from './images/bg.jpg';

const rrss = ['google', 'twitter', 'linkedn', 'instagram', 'facebook', 'skype', 'youtube'];
const links = ['home', 'services', 'portfolio', 'us', 'contact'];

const style = {
	backgroundImage: `url(${bg})`,
	backgroundPosition: 'center',
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat',
	marginBottom: 0,
}
export default ({ apps, setApp, clearApp, t }) => (
  <Content style={style}>
    <Container>
      <Columns className="is-hidden-touch">
        {rrss.map(item => (
          <Columns.Column key={item}>
            <IconRRSS rs={item} />
          </Columns.Column>
        ))}
      </Columns>
      <Columns>
      	<Columns.Column size={6} offset={3} className="is-horizontal-center" >
          <Link to={routes.getLink()} onClick={clearApp}>
            <Image
              alt="logo"
              src="/logo.png"
            />
          </Link>
      	</Columns.Column>
      </Columns>
      <Columns className="headers-links has-text-white has-text-weight-bold">
        {links.map((item, i) => (
          <Columns.Column
            className="has-text-centered"
            key={item}
          >
            <ItemLink item={item} />
          </Columns.Column>
        ))}
      </Columns>
    </Container>
  </Content>
);
