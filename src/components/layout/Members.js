import React from 'react';
import { Content, Container, Box, Image } from 'react-bulma-components';

import { translate } from "react-translate";

import './styles/member.css';

export default translate('members')(({ t }) => (
  <Container className='member'>
    <Image rounded size={96} />
    <Box>
      <Content className='name has-text-weight-bold'>
        Full Name
      </Content>
      <Content className='role has-text-weight-bold'>
        Role
      </Content>
      <Content className='info'>
        {t('info')}
      </Content>
    </Box>
  </Container>
));
