import React from 'react';

import { Content, Image } from 'react-bulma-components';


import { translate } from "react-translate";

import design from './images/example.png';
import develop from './images/example.png';
import consulting from './images/example.png';

const icons = { design, develop, consulting };


export default translate('services')(({ t, type }) => {
  const { [type]:src = "" } = icons;
  return (
    <Content className="has-text-centered">
      <Image alt="text" src={src} size="128x128" />
      {t(`${type}_description`)}
    </Content>
  );
})
