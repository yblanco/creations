import React from 'react';

import { Columns, Navbar, Content, Image  } from 'react-bulma-components';

import bg from './img/bg.jpeg';


import ln from './img/in.png';
import ws from './img/ws.png';
import tw from './img/tw.png';
import ig from './img/ig.png';
import fb from './img/fb.png';
import g from './img/g.png';

import './header.css';

const Header = () => {

	const styleBg = {
		backgroundImage: `url(${bg})`,
		backgroundPosition: 'center',
  	backgroundSize: 'cover',
  	backgroundRepeat: 'no-repeat'
	}

	return (
		<Content className="header-bg" style={styleBg}>
			<Columns className="is-horizontal-center">
				<Columns.Column>
					<Image src={ln} alt="Linkedn"  className="is-48x48" />
				</Columns.Column>
				<Columns.Column>
					<Image src={ws} alt="Whatsapp"  className="is-48x48" />
				</Columns.Column>
				<Columns.Column>
					<Image src={tw} alt="Twitter"  className="is-48x48" />
				</Columns.Column>
				<Columns.Column>
					<Image src={fb} alt="Facebook"  className="is-48x48" />
				</Columns.Column>
				<Columns.Column>
					<Image src={ig} alt="Instagram"  className="is-48x48" />
				</Columns.Column>
				<Columns.Column>
					<Image src={g} alt="Google"  className="is-48x48" />
				</Columns.Column>
			</Columns>
			<Content>
				<Columns>
					<Columns.Column size={4} offset={4} className="is-horizontal-center" >
							<Image src="logo.png" alt="logo"/>
					</Columns.Column>
				</Columns>
			</Content>
			<Navbar>
	      <Navbar.Brand>
	        <Navbar.Burger/>
	      </Navbar.Brand>
	      <Navbar.Menu>
	        <Navbar.Container style={{flexGrow: 1, justifyContent: "center"}}>
	          <Navbar.Item href="#">Inicio</Navbar.Item>
	          <Navbar.Item href="#">Servicios</Navbar.Item>
	          <Navbar.Item href="#">Portafolio</Navbar.Item>
	          <Navbar.Item href="#">Nosotros</Navbar.Item>
	          <Navbar.Item href="#">Contacto</Navbar.Item>
	        </Navbar.Container>
	      </Navbar.Menu>
	    </Navbar>
    </Content>
	)
}


export default Header;
