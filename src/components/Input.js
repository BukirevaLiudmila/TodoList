import React from 'react';
import {findDOMNode} from 'react-dom'
import ReactTooltip from 'react-tooltip'
import generateId from "../helpers/generateId";


class Input extends React.Component {
	constructor(props) {
		super(props);
		this.state = {value: ''};
		this.addNewTodo = this.addNewTodo.bind(this);
		this.onChangeInput = this.onChangeInput.bind(this);
	}

	addNewTodo() {
		if (this.checkValue(this.state.value)) {
			this.props.addTodo({
				id: generateId(),
				text: this.state.value,
				completed: false
			})
		}
	}

	checkValue(value) {
		return (value && value.trim() !== '' && value.trim().length >= 3);
	}

	onChangeInput(event) {
		const {target: {value}} = event;
		this.setState({value})
		if (this.checkValue(value) || !value) {
			ReactTooltip.hide(findDOMNode(this.refs.inputTooltip));
		}
		else {
			ReactTooltip.show(findDOMNode(this.refs.inputTooltip));
		}
	}

	render() {
		return (
			<div className="footer" data-toggle="tooltip" data-placement="top" title="Tooltip on top">
				<ReactTooltip
					type="error"
					effect="solid"
				/>
				<div
					className="plus"
					onClick={this.addNewTodo}
				/>
				<input
					type="text"
					className="form-control"
					value={this.state.value}
					data-tip="Некорректный ввод данных"
					ref="inputTooltip"
					data-event="customEvent"
					onChange={this.onChangeInput}
					onKeyPress={(event) => {
						if (event.charCode === 13) this.addNewTodo()
					}}
				/>
			</div>
		)
	}
}

export default Input;