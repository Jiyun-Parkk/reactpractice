import React, { Component } from "react";
import Habit from "./habit";
import HabitAddForm from "./HabitAddForm";

class Habits extends Component {
	handleIncrement = (habit) => {
		this.props.onIncrement(habit);
	};
	handleDecrement = (habit) => {
		this.props.onDecrement(habit);
	};
	handleDelete = (habit) => {
		this.props.onDelete(habit);
	};
	handleAdd = (name) => {
		this.props.onAdd(name);
	};
	render() {
		const habit = this.props.habit;
		return (
			<div>
				<HabitAddForm habit={habit} onAdd={this.handleAdd} />
				<ul>
					{habit.map((habit) => (
						//habit 이라는 props에 habit 요소를 전달 해준다
						<Habit
							key={habit.id}
							habit={habit}
							onIncrement={this.handleIncrement}
							onDecrement={this.handleDecrement}
							onDelete={this.handleDelete}
						/>
					))}
				</ul>
				<button type="button" className="habits-reset" onClick={this.props.onReset}>
					Reset
				</button>
			</div>
		);
	}
}

export default Habits;
