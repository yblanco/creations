import React, { useContext } from 'react';

import { TranslatorProvider } from 'react-translate';


import { Container } from 'react-bulma-components';

import { Store } from './reducers';
import { Routes } from './routes';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Snackbar from './components/layout/Snackbar';

import { hideSnackbar } from './actions/snackbar.action';

import en from './i18n/en.json';
import es from './i18n/es.json';

const translate = { en, es };

const App = () => {
  const { state, dispatch } = useContext(Store);
  const { snackbar } = state;
  const { location } = window;
  const { search = "", pathname = "/" } = location;
  const params = new URLSearchParams(search);
  const lang = params.get('lang');
  const { [lang]:translations = es } = translate;

  return (
    <div>
      <TranslatorProvider translations={translations}>
        <Snackbar info={snackbar} hideSnackbar={() => hideSnackbar(dispatch)} />
        {
          pathname === "/"
            ? <Header />
            : ""
        }
        <Container fluid>
          <Routes />
        </Container>
        <Footer />
      </TranslatorProvider>
    </div>
  );
};

export default App;
