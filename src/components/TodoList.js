import React from 'react';
import generateId from '../helpers/generateId';
import Todo from './Todo';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {
                    id: generateId(),
                    text: 'Покормить собаку',
                    completed: false
                },
                {
                    id: generateId(),
                    text: 'Построить дом',
                    completed: false
                },
                {
                    id: generateId(),
                    text: 'Помыть машину',
                    completed: true
                },
                {
                    id: generateId(),
                    text: 'Уйти в закат',
                    completed: false
                }
            ]
        };
    }

    toggleTodo(todoId) {
        this.setState(prevState => ({
            todos: prevState.todos.map(todo => {
                if (todo.id === todoId) {
                    return {
                        id: todo.id,
                        text: todo.text,
                        completed: !todo.completed
                    };
                }
                return todo;
            })
        }));
    }

    render() {
        return (
            <ul>
                {this.state.todos.map(todo =>
                    <Todo
                        key={todo.id}
                        {...todo}
                        onClick={() => this.toggleTodo(todo.id)}
                    />
                )}
            </ul>
        );
    }

}

export default TodoList;