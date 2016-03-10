'use strict';

import React, { PropTypes } from 'react';
import PureComponent from './PureComponent';
import { connect } from 'react-redux';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import Footer from './Footer';
import { Button } from 'react-bootstrap';
import { ButtonGroup } from 'react-bootstrap';

class App extends PureComponent {
    static propTypes = {
        activeFilter: PropTypes.string.isRequired,
        todoList: PropTypes.object.isRequired,
        dispatch: PropTypes.func.isRequired,
    }

    render() {
        const { dispatch, activeFilter, todoList } = this.props;
        return (
            <div className="app">
                <Button bsStyle="danger">Danger</Button>
                <ButtonGroup justified>
                    <Button href="#">Left</Button>
                    <Button href="#">Middle</Button>
                </ButtonGroup>

                <div className = 'container'> sadsad</div>

                <div className="todos">
                    <h1>ToDo App</h1>
                    <AddTodo dispatch={dispatch} />
                    <TodoList dispatch={dispatch} activeFilter={activeFilter} todoList={todoList} />
                    <Footer dispatch={dispatch} activeFilter={activeFilter} />
                </div>
                <small className="signature">by <b>Ivan Rogić</b> from <b>Toptal</b></small>
            </div>
        );
    }
}

const mapStateToProps = state => ({ ...state.todos });

export default connect(mapStateToProps)(App);

