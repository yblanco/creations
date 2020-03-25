import React from 'react';

import { Columns, Content, Image } from 'react-bulma-components';


import { translate } from "react-translate";

import home from './images/example.png';
import sections from './images/example.png';
import time from './images/example.png';

const icons = { home, sections, time };


export default translate('budget')(({ t, step, icon, text }) => {
  const steps = Array(step).fill("");
  const { [icon]:src = '' } = icons;
  return (
    <Content className="step-budget has-background-warning">
      <Columns className="is-vcentered">
        <Columns.Column size={3} className="has-text-centered">
          {
            steps.map((item, i) => (
              <span key={`${item}-${i}`} className="step-budget-dot">
              </span>
            ))
          }
        </Columns.Column>
        <Columns.Column size={7}>
          {t(text)}
        </Columns.Column>
        <Columns.Column size={2} className="step-budget-icon">
          <Image alt={icon} src={src} size={48} />
        </Columns.Column>
      </Columns>
    </Content>
  );
})
