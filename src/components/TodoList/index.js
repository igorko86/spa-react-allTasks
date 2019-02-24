import React, {Component} from 'react';

class TodoList extends Component {
    render() {
        return (
            <div>
                <header className='header'>
                    <input type="text"/>
                    <button>Add Task</button>
                </header>
            </div>
        );
    }
}

export default TodoList;