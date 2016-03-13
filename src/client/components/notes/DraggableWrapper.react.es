'use strict';

import React from 'react';
import { DragSource } from 'react-dnd';
import classnames from 'classnames';
import DndTypes from 'sd/constants/DNDTypes';

const itemSource = {
    beginDrag(props) {
        let {el} = props;
        return {
            item: {
                parentId: props.parentId,
                el: el
            }
        };
    },

    canDrag(props) {
        let {disabled} = props;
        return !disabled;
    }
};

@DragSource(DndTypes.EDITOR_ITEM, itemSource, (connect) => ({
    connectDragPreview: connect.dragPreview(),
    connectDragSource: connect.dragSource()
}))
export default class EditorItemDraggableWrapper extends React.Component {
    static propTypes = {
        el: React.PropTypes.object.isRequired,
        parentId: React.PropTypes.string,
        disabled: React.PropTypes.bool
    };

    componentDidMount() {
        let {connectDragPreview, el} = this.props;
        let dragginItem = document.querySelector('[data-id="' + el.get('id') + '"]') || null;

        connectDragPreview(dragginItem);
    }

    render() {
        const { connectDragSource } = this.props;
        let {disabled, className, ...other} = this.props;
        let classes = classnames(className, 'field-drag-wrapper', {
            'field-drag-wrapper_disabled': disabled
        });

        return connectDragSource(
            <div {...other} className={classes} >
                {this.props.children}
            </div>            
        );
    }
}
