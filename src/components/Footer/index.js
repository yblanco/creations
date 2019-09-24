import React from 'react';

import { Footer, Container, Columns, Heading, Menu } from 'react-bulma-components';

import './footer.css';


const FooterPage = () => {
  return (
  	<div className="footer-content">
  		<Footer className="has-background-info">
  			<Columns>
  				<Columns.Column>
  					<Heading size={5}>
  						Our Services
  					</Heading>
  					<Menu>
					    <Menu.List>
					      <Menu.List.Item>Diseño Web</Menu.List.Item>
					      <Menu.List.Item>Desarrollo de Aplicaciones</Menu.List.Item>
					      <Menu.List.Item>Diseño de procesos de negocios</Menu.List.Item>
					      <Menu.List.Item>Automatización de Procesos</Menu.List.Item>
					    </Menu.List>
				    </Menu>
  				</Columns.Column>
  				<Columns.Column>
  					<Heading size={5}>
  						Creations
  					</Heading>
  					<Menu>
					    <Menu.List>
					      <Menu.List.Item>¿Quiénes somos?</Menu.List.Item>
					      <Menu.List.Item>Metodología de Proyecto Creat</Menu.List.Item>
					      <Menu.List.Item>Política de privacidad</Menu.List.Item>
					      <Menu.List.Item>Términos y condiciones</Menu.List.Item>
					    </Menu.List>
				    </Menu>
  				</Columns.Column>
  				<Columns.Column>
  					<Heading size={5}>
  						Blog
  					</Heading>
  					<Menu>
					    <Menu.List>
					      <Menu.List.Item>Los mejores framework 2019</Menu.List.Item>
					      <Menu.List.Item>Diseño de tu logo en 5 pasos</Menu.List.Item>
					      <Menu.List.Item>5 consejos para tu negocio</Menu.List.Item>
					    </Menu.List>
				    </Menu>
  				</Columns.Column>
  				<Columns.Column>
  					<Heading size={5}>
  						Más
  					</Heading>
  					<Menu>
					    <Menu.List>
					      <Menu.List.Item>Preguntas Frecuentes</Menu.List.Item>
					      <Menu.List.Item>Cotiza tu web</Menu.List.Item>
					      <Menu.List.Item>Contactanos</Menu.List.Item>
					    </Menu.List>
				    </Menu>
  				</Columns.Column>
  			</Columns>
    	</Footer>
    	<Container breakpoint="fullhd" className="has-text-centered has-background-grey has-text-white-bis">
				Powered by <strong className="has-text-white-bis">Creations</strong> for business
			</Container>
    </div>
  );
}

// Made with &hearts; by <strong>creations.com</strong>

export default FooterPage;
