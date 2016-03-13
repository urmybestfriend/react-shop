import React from 'react';
import { RouteHandler } from 'react-router';
import HeaderContainer from 'components/header/header';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

// passing appState in general incorrect
@DragDropContext(HTML5Backend)
export default class AppContainer extends React.Component {
    render() {
        // TODO remove appState from HeaderComponent
        return (
            <div>
                <HeaderContainer appState={this.props.appState} />
                <RouteHandler appState={this.props.appState} />
            </div>
        );
    }
}
