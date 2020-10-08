import React from 'react';
import { Content, Heading} from 'react-bulma-components';

import { translate } from "react-translate";

export default translate('contact_info')(({ t }) => {
  return (
    <Content className='has-text-justified info-contact'>
      <Heading size={3} className="has-text-centered">
        {t('get_budget')}
      </Heading>
      <Heading subtitle size={6}>
        {t('info_budget')}
      </Heading>
      <Heading size={6}>
        {t('step_one')}
      </Heading>
      <Heading size={6}>
        {t('step_two')}
      </Heading>
      <Heading size={6}>
        {t('step_three')}
      </Heading>
      <Heading size={6}>
        {t('step_four')}
      </Heading>
    </Content>
  );
});
