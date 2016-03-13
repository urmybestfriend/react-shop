import React from 'react';
import Router, { Route, Redirect } from 'react-router';
import RouteNames from 'constants/route_names';
import AppContainer from 'components/app_container';
import ExampleComponent from 'components/example/example';
import AuthorizationPage from 'components/pages/Authorization.react';
import NotesPage from 'components/pages/Notes.react';
import PhonesPage from 'components/pages/Phones.react';
import MainPage from 'components/pages/Main.react';

const router = _.assign(Router.create({
    routes: (
        <Route path='/' name={RouteNames.APP} handler={AppContainer}>
            <Route path='main' name={RouteNames.MAIN} handler={MainPage} />
            <Route path='example' name={RouteNames.EXAMPLE_ROUTE_NAME} handler={ExampleComponent} />
            <Route path='authorization' name={RouteNames.AUTHORIZATION_PAGE} handler={AuthorizationPage} />
            <Route path='notes' name={RouteNames.NOTES_PAGE} handler={NotesPage} />
            <Route path='phones' name={RouteNames.PHONES_PAGE} handler={PhonesPage} />
            <Redirect from='/' to={RouteNames.MAIN} />
        </Route>
    ),

    location: Router.HistoryLocation
}), RouteNames, {});

export default router;
