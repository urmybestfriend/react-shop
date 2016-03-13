import React from 'react';
import { currentRouteName } from 'selectors/router_selectors';

export default class ExampleComponent extends React.Component {
    render() {
        return (
            <div className="example-container">
                <div>Selector using example: {currentRouteName(this.props.appState)}</div>
            </div>
        );
    }
}
