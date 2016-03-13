'use strict';

import React from 'react';
import {FloatingActionButton, FlatButton, Dialog, TextField, LeftNav, MenuItem, List, ListItem, Divider} from 'material-ui';
import {ContentAdd} from 'material-ui/lib/svg-icons';
import NotesActions from 'actions/notes_actions';
import notesSelectors from 'selectors/notes_selectors';
import Note from 'components/notes/Note.react';
import AddPhoneModal from 'components/modals/AddPhoneModal.react';

const TITLE_REMOVE_DIALOG = 'Remove note';
const TITLE_EDITABLE_DIALOG = 'Edit note';
const REMOVE_DIALOG_MESSAGE = 'Are you sure you want to delete this note?';

const TextFieldStyle = {
    margin: '5px 10px',
    padding: '0 5px'
};

export default class NotesPage extends React.Component {

    constructor(props) {
        super(props);

        this.removeNoteId = null;
        this.editNote = null;
        this.chosenTag = null;
    }

    componentWillMount () {
        NotesActions.getNotes();
    }

    _addNote() {
        NotesActions.addNewNote();
    }

    _changeRemoveNoteId(id) {
        this.removeNoteId = id;
        this.forceUpdate();
    }

    _changeEditNodeId(note) {
        this.editNote = note;
        this.forceUpdate();
    }

    _removeNote() {
        NotesActions.removeNote(this.removeNoteId);
        this.removeNoteId = null;
    }

    _editNode = () => {
        const { noteTitle, noteBody, noteTag } = this.refs;
        this.editNote.title = noteTitle.getValue();
        this.editNote.body = noteBody.getValue();
        this.editNote.tag = noteTag.getValue();

        NotesActions.updateNote(this.editNote);
        this.editNote = null;
    }

    _generateLeftNav() {
        return (
            <LeftNav open={true}>
                <MenuItem>All</MenuItem>
                <MenuItem>Tags</MenuItem>
            </LeftNav>
        );
    }

    _setTag(tag) {
        this.chosenTag = tag;
        this.forceUpdate();
    }

    _undoNotes() {
        NotesActions.undoNotes();
    }

    _generateList() {
        let {appState} = this.props;
        console.log(Object.keys);
        let list = {};
        let notes = notesSelectors.getNotes(appState);
        notes.forEach((note) => {
            if(note.tag) { list[note.tag] = true; }
        });

        list = Object.keys(list).map((key, ind) => {
            return <ListItem primaryText={key} key={ind+key} onClick={this._setTag.bind(this, key)}/>
        });

        return (<List className="list">
                    <ListItem primaryText="Undo" onClick={this._undoNotes}/>
                    <ListItem primaryText="All" onClick={this._setTag.bind(this, null)}/>
                    {list}
                </List>);
    }

    _renderNotes() {
        let {appState} = this.props;
        let notes = notesSelectors.getNotes(appState);
        let notesComponent = [];
        notes.forEach((note) => {
            if(!this.chosenTag || note.tag && this.chosenTag === note.tag) {
                notesComponent.push( <Note note={note} 
                    key={note.id} 
                    changeRemoveNoteId={this._changeRemoveNoteId.bind(this, note.id)}
                    changeEditNode={this._changeEditNodeId.bind(this, note)}
                    /> 
                );
            }
        });

        return <div className="notes-container">
                    <div>
                        {notesComponent}
                    </div>
                </div>
    }

    render() {
        let renderedNotes = this._renderNotes();
        let actions = [
            <FlatButton
                label="Cancel"
                secondary={true}
                onClick={this._changeRemoveNoteId.bind(this, null)}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                keyboardFocused={true}
                onClick={this._removeNote.bind(this)}
            />
        ];

        let editActions = [
            <FlatButton
                label="Cancel"
                secondary={true}
                onClick={this._changeEditNodeId.bind(this, null)}
            />,
            <FlatButton
                label="Save"
                primary={true}
                keyboardFocused={true}
                onClick={this._editNode.bind(this)}
            />]

        return (
            <div className="container">
                <AddPhoneModal />
                
                {this._generateList()}
                
                <div className="notes">
                    
                {/*this._generateLeftNav()*/}
                    {
                        this.editNote ? 
                        <Dialog
                            title={TITLE_EDITABLE_DIALOG}
                            actions={editActions}
                            modal={true}
                            open={!!this.editNote}
                            >
                            <TextField ref='noteTitle' style={TextFieldStyle} defaultValue={this.editNote.title} floatingLabelText={'Title'}/>
                            <TextField ref='noteBody' style={TextFieldStyle} defaultValue={this.editNote.body} floatingLabelText={'Body'}/>
                            <TextField ref='noteTag' style={TextFieldStyle} defaultValue={this.editNote.tag} floatingLabelText={'Tag'}/>
                        </Dialog> :
                        null
                    }
                    <Dialog
                          title={TITLE_REMOVE_DIALOG}
                          actions={actions}
                          modal={true}
                          open={!!this.removeNoteId}
                        >
                        {REMOVE_DIALOG_MESSAGE}
                    </Dialog>
                    {renderedNotes}
                    <div className="add-notes">
                        <FloatingActionButton onClick={this._addNote}>
                            <ContentAdd />
                        </FloatingActionButton>
                    </div>
                </div>
            </div>);
    }
}
