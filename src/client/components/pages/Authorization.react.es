'use strict';

import React from 'react';
import {Dialog, RaisedButton, TextField} from 'material-ui';
import Colors from 'material-ui/lib/styles/colors';

export default class AuthorizationPage extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		console.log(Colors);
		return <div>
			<Dialog modal={true} defaultOpen={true}>
				<TextField
					hintText="Login"
					floatingLabelText="Login"
					underlineStyle={{borderColor: Colors.deepPurple600}} />
				<TextField
					hintText="Password"
					floatingLabelText="Password"
					underlineStyle={{borderColor: Colors.deepPurple600}} />
				<RaisedButton label="ACCEPT" primary={true} />
				<RaisedButton label="CANCEL" secondary={true} />
			</Dialog>
		</div>;
	}
}