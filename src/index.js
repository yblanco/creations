import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import App from './App';
import { Provider } from './reducers';

import './index.css';
import './scroll.css';

ReactDOM.render(
  <Provider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
