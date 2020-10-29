import React from 'react';

import { Content, Image } from 'react-bulma-components';


import { translate } from "react-translate";

import design from './images/design.svg';
import develop from './images/dev.svg';
import uiux from './images/uiux.svg';
import example from './images/example.png';

const icons = { design, develop, uiux };


export default translate('services')(({ t, type }) => {
  const { [type]:src = example } = icons;
  return (
    <Content className="has-text-centered">
      <Image alt="text" src={src} size={96} />
      <div style={{ fontWeight: 'bold', paddingBottom: '0.5em' }}>{t(`${type}_title`)}</div>  
      {t(`${type}_description`)}
    </Content>
  );
})
