import React from 'react';
import { Footer, Container, Content } from 'react-bulma-components';
import Moment from 'react-moment';

import { translate } from "react-translate";


import './styles/footer.css';

export default translate('footer')(({ t }) => (
  <Footer className="is-dark notification">
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
));
