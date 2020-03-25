import React from 'react';

import { Content, Container, Columns, Heading, Button } from 'react-bulma-components';


import { translate } from "react-translate";

import BudgetStep from './BudgetStep';

import bg from './images/bg.png';

import './budget.css';

const style = {
  backgroundImage: `url(${bg})`,
  backgroundPosition: "top left",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
}

export default translate('budget')(({ t }) => {
  return (
    <Content style={style}>
      <Container className="section">
        <Columns>
          <Columns.Column>
            <Heading size={3}>
              {t('budget_title')}
            </Heading>
            <Columns>
              <Columns.Column offset={1} size={10} className="has-text-justified">
                {t('budget_description')}
              </Columns.Column>
            </Columns>
            <Columns>
              <Columns.Column offset={4} size={4} className="has-text-centered">
                <Button color="warning">
                  {t('quote')} >>
                </Button>
              </Columns.Column>
            </Columns>
          </Columns.Column>
          <Columns.Column>
            <BudgetStep step={1} icon="home" text="element_on_home_page" />
            <BudgetStep step={2} icon="sections" text="sections_on_page" />
            <BudgetStep step={3} icon="time" text="time_for_ready" />
          </Columns.Column>
        </Columns>
      </Container>
    </Content>
  );
})
