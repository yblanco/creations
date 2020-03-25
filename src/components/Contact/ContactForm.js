import React from 'react';
import { Box, Heading, Form, Button } from 'react-bulma-components';

import { translate } from "react-translate";

import './contact.css'

export default translate('contact')(({ t }) => {
  return (
    <Box className="contact">
      <Heading size={3} className="has-text-centered">
        {t('get_in_touch')}
      </Heading>
      <Heading size={6} className="has-text-centered">
        {t('get_in_touch_description')}
      </Heading>
      <Form.Control>
        <Form.Field>
          <Form.Label>
            {t('name')}
          </Form.Label>
          <Form.Input />
        </Form.Field>
        <Form.Field>
          <Form.Label>
            {t('mail')}
          </Form.Label>
          <Form.Input />
        </Form.Field>
        <Form.Field>
          <Form.Label>
            {t('phone')}
          </Form.Label>
          <Form.Input />
        </Form.Field>
        <Form.Field>
          <Form.Label>
            {t('message')}
          </Form.Label>
          <Form.Input />
        </Form.Field>
        <Form.Field>
          <Button color="link">{t('contact')}</Button>
        </Form.Field>
      </Form.Control>
    </Box>
  );
});
