import React, { Component } from "react";
import "../app.css";

class Habit extends Component {
	componentDidMount() {
		console.log(`habit:${this.props.habit.name}mounted`);
	}
	componentWillUnmount() {
		console.log(`habit:${this.props.habit.name}willunmount`);
	}
	//여기서 다시 함수를 호출하는 이유는 내가 선택하는 li에 한수를 실행시키기 위해서다
	handleIncrement = () => {
		this.props.onIncrement(this.props.habit);
	};
	handleDecrement = () => {
		this.props.onDecrement(this.props.habit);
	};
	handleDelete = () => {
		this.props.onDelete(this.props.habit);
	};
	render() {
		const { name, count } = this.props.habit;
		return (
			<li className="habit">
				<span className="habit-name">{name}</span>
				<span className="habit-count">{count}</span>
				<button
					className="habit-button habit-increase"
					onClick={this.handleIncrement}
				>
					<i className="fas fa-plus-square"></i>
				</button>
				<button
					className="habit-button habit-decrease"
					onClick={this.handleDecrement}
				>
					<i className="fas fa-minus-square"></i>
				</button>
				<button
					className="habit-button habit-delete"
					onClick={this.handleDelete}
				>
					<i className="fas fa-trash"></i>
				</button>
			</li>
		);
	}
}

export default Habit;
