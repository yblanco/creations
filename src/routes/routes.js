import Routes from './class';

import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

const routes = {
  notFound: {
    link: '*',
    component: NotFound,
  },
  home: {
    link: '/',
    component: Home,
  },
};

export default new Routes(routes);
