import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/index.css';
import generateId from '../helpers/generateId';
import TodoList from './TodoList';
import Header from './Header';

class App extends React.Component {
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
        this.setState((prevState) => ({
            todos: prevState.todos.map(todo => {
                if (todo.id === todoId) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    };
                }
                return todo;
            })
        }));
    }

    removeTodo() {
        this.setState((prevState) => ({
            todos: prevState.todos.filter((todo) => !(todo.completed === true))
        }));
    }
    
    render() {
        return [
            <Header
                key={generateId()}
                removeTodo={() => this.removeTodo()}
            />,
            <TodoList
                key={generateId()}
                toggleTodo={(todoId) => this.toggleTodo(todoId)}
                todos={this.state.todos}
            />
        ];
    }
}

export default App;