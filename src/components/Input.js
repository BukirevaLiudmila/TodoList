import React from 'react';
import generateId from "../helpers/generateId";

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.addNewTodo = this.addNewTodo.bind(this);
    }

    addNewTodo() {
        this.props.addTodo({
            id: generateId(),
            text: this.state.value,
            completed: false
        })
    }

    render() {
        return (
            <div className="footer">
                <div
                    className="plus"
                    onClick={this.addNewTodo}
                />
                <input
                    type="text"
                    className="form-control "
                    value={this.state.value}
                    onChange={(event) => this.setState({value: event.target.value})}
                    onKeyPress={(event) => {if (event.charCode === 13) this.addNewTodo()} }
                />
            </div>
        )
    }
}

export default Input;