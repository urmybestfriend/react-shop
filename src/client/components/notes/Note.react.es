'use strict';

import React from 'react';
import {Paper, TextField, IconButton, Dialog} from 'material-ui';
import {ContentClear, EditorModeEdit} from 'material-ui/lib/svg-icons';
import { DragSource, DropTarget } from 'react-dnd';
import DndTypes from 'constants/dnd_types';
import NotesActions from 'actions/notes_actions';
import MenuNote from 'components/notes/MenuNote.react';

const dragStyle = {
  height: '10px',
  width: '100%'
};

const iconStyle = {
    width: '36px',
    height: '36px',
    padding: '8px'
}

const noteStyle = {
  margin: 10,
  textAlign: 'center',
  display: 'inline-block'
};

const noteTitleStyle = {
    width: '100%'
};

const itemSource = {
    beginDrag(props) {
        return {
            note: {
                id: props.note.id,
                position: props.note.position
            }
        };
    }
};
const itemTarget = {
    drop(props, monitor) {
        if(monitor.isOver({ shallow: true })) {
            let dragNote =  monitor.getItem().note;
            let dropNote = props.note;
            NotesActions.updateOrder({ dragNote, dropNote });
        }
    }
};

@DragSource(DndTypes.NOTES_ITEM, itemSource, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
}))
@DropTarget(DndTypes.NOTES_ITEM, itemTarget, (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOverNote: monitor.isOver(),
    canDropNote: monitor.canDrop()
}))
export default class Note extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { isDragging, connectDragSource, connectDropTarget, note, changeRemoveNoteId, changeEditNode, isOverNote, canDropNote } = this.props;
        const classNameIsCanDrop = isOverNote && canDropNote ? 'drop-target' : '';
        let fullStyleNote = Object.assign({}, noteStyle, note.style, 
            isDragging ? {opacity: 0.5} : {});
        let {title, body, id} = note;
        return connectDropTarget(connectDragSource(
            <div className={'notes-shell '+ classNameIsCanDrop}>
                <Paper className='note' style={fullStyleNote} zDepth={2} rounded={false} >
                    <Paper style={dragStyle}></Paper>
                    <div className='note-title'>
                        {title}
                        <div>
                            {<IconButton style={iconStyle} onClick={changeEditNode}>
                                <EditorModeEdit />
                            </IconButton>}
                            {<IconButton style={iconStyle} onClick={changeRemoveNoteId}>
                                <ContentClear />
                            </IconButton>}
                        </div>
                        {/*<TextField className="note-title" style={noteTitleStyle} disabled={true} defaultValue={title} underlineShow={false} />*/}
                       {/*<MenuNote noteId={this.props.note.id} />*/}
                    </div>
                    <div className="note-body">
                        <textarea readOnly={true} className="note-text" value={body} multiLine={true}/>
                    </div>
                    {/*<IconButton onClick={changeRemoveNoteId}>
                                            <ContentClear />
                                        </IconButton>*/}
                </Paper>
            </div>  
        ));
    }
}
