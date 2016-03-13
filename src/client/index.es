'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import RouteActions from 'actions/router_actions';
import store from 'store/app_store';
import router from 'router/router';
import 'style/index.scss';

(() => {
    let routeHandler = null;
    const reactDomElement = document.getElementById('react-container');

    store.subscribe(() => {
        if (routeHandler != null) {
            ReactDOM.render(React.createElement(routeHandler, { appState: store.getState() }), reactDomElement);
        }
    });

    router.run((Handler, routerState) => {
        routeHandler = Handler;
        RouteActions.updateRoute(routerState);
    });
})();
