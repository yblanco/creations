import React from 'react';

import { Content, Columns, Image } from 'react-bulma-components';

import example from './images/default.png';
import example2 from './images/default2.png';


import './portfolio.css';

export default () => {
  return (
    <Content className="section portfolio ">
      <Columns>
        <Columns.Column size={6}>
          <Image alt="default" src={example} />
        </Columns.Column>
        <Columns.Column size={6}>
          <Image alt="default" src={example2} />
        </Columns.Column>
        <Columns.Column size={4}>
          <Image alt="default" src={example} />
        </Columns.Column>
        <Columns.Column size={4}>
          <Image alt="default" src={example2} />
        </Columns.Column>
        <Columns.Column size={4}>
          <Image alt="default" src={example} />
        </Columns.Column>
      </Columns>
    </Content>
  );
}
