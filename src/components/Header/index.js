import React from 'react';

import { Columns, Navbar, Content, Icon, Image  } from 'react-bulma-components';

import './assets/header.css';
import bg from './assets/bg.jpg';
import rrss from './assets/rrss.PNG';


const Header = () => {

	const styleBg = {
		backgroundImage: `url(${bg})`,
		backgroundPosition: 'center',
  	backgroundSize: 'cover',
  	backgroundRepeat: 'no-repeat'
	}

	return (
		<Content breakpoint="fullhd" className="header-bg" style={styleBg}>
			<Columns>
				<Columns.Column size={4} offset={4} className="has-text-centered" style={{ color: "red" }}>
					<Image src={rrss} alt="logo"  size="4by1" />
				</Columns.Column>
			</Columns>
			<Content>
				<Columns>
					<Columns.Column size={4} offset={4} className="has-text-centered" style={{ color: "red" }}>
							<Image src="logo.jpeg" alt="logo"  size="3by1" />
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
	          <Navbar.Item href="#">contacto</Navbar.Item>
	        </Navbar.Container>
	      </Navbar.Menu>
	    </Navbar>
    </Content>
	)
}


export default Header;
