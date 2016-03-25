import React from 'react';
import { Route, IndexRoute } from 'react-router';

/* containers */
import { App } from 'containers/App';
import { Home } from 'containers/Home';
import { List } from 'containers/List';
import { Phones } from 'containers/Phones';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="list" component={List} />
    <Route path="phones" component={Phones} />
    <Route status={404} path="*" component={Home} />
  </Route>
);
