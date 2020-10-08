import React from 'react';
import { Content, Container, Columns, Image } from 'react-bulma-components';


import { Link } from 'react-router-dom';
import routes from '../../routes';

import './styles/header.css';

import IconRRSS from './IconRRSS';
import ItemLink from './ItemLink';

import bg from './images/bg.png';

const rrss = ['twitter', 'linkedn', 'instagram', 'facebook', 'skype', 'youtube'];
const links = ['services', 'portfolio', 'us', 'contact'];

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
      <Columns className="is-hidden-mobile">
        {rrss.map((item, i) => (
          <Columns.Column
						key={item}
						desktop={{ size: 1, offset: i === 0 ? 3 : null }}
						tablet={{ size: 2 }}
					>
            <IconRRSS rs={item} />
          </Columns.Column>
        ))}
      </Columns>
      <Columns>
      	<Columns.Column
					desktop={{ size: 6, offset: 3 }}
					tablet={{ size: 8, offset: 2 }}
					mobile={{ size: 12 }}
					className="is-horizontal-center"
				>
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
						desktop={{ size: 2, offset: i === 0 ? 2 : null }}
						tablet={{}}
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
