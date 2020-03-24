import React from 'react';

import { Container, Columns, Heading, Button } from 'react-bulma-components';


import { translate } from "react-translate";

import BudgetStep from './BudgetStep';


import './budget.css';


export default translate('budget')(({ t }) => {
  return (
    <Container className="budget">
      <Columns>
        <Columns.Column>
          <Heading size={4}>
            {t('budget_title')}
          </Heading>
          <Columns>
            <Columns.Column offset={1} size={10} className="has-text-justified">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu odio sed velit facilisis lobortis. Donec eu mi luctus, cursus turpis sit amet, rhoncus erat. Donec quam mi, semper in erat ac, lobortis rhoncus tortor. Duis ultrices eget mauris tincidunt scelerisque.
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
  );
})
