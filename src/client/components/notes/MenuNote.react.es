'use strict';

import React from 'react';
import {IconMenu, MenuItem, IconButton} from 'material-ui';
import {NavigationMoreVert} from 'material-ui/lib/svg-icons';

export default class MenuNote extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let {noteId} = this.props;
        return (  
            <div>
                <IconMenu
                      iconButtonElement={<IconButton><NavigationMoreVert /></IconButton>}
                      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                      targetOrigin={{horizontal: 'right', vertical: 'top'}}
                      key={'menunote-'+noteId}
                    >
                        <MenuItem primaryText="Settings" />
                        <MenuItem primaryText="Delete" />
                </IconMenu>
            </div>
        );
    }
}
