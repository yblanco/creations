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
      <Image alt="text" src={src} size={128} />
      {t(`${type}_description`)}
    </Content>
  );
})
