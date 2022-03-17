import React, { Component } from "react";
import "./app.css";
import Habits from "./components/habits";
import Navbar from "./components/navbar";

let getHabitlist;
localStorage.getItem("habitlist")
	? (getHabitlist = JSON.parse(localStorage.getItem("habitlist")))
	: (getHabitlist = []);

class App extends Component {
	state = {
		habits: getHabitlist,
	};

	handleIncrement = (habit) => {
		const habits = this.state.habits.map((item) => {
			if (item.id === habit.id) {
				return { ...habit, count: habit.count + 1 };
			}
			return item;
		});
		const list = JSON.stringify(habits);
		localStorage.setItem("habitlist", list);

		// const habits = [...this.state.habits];
		// const index = habits.indexOf(habit);
		// habits[index].count++;
		this.setState({ habits });
	};
	handleDecrement = (habit) => {
		const habits = this.state.habits.map((item) => {
			if (item.id === habit.id) {
				return { ...habit, count: habit.count > 0 ? habit.count - 1 : 0 };
			}
			return item;
		});
		const list = JSON.stringify(habits);
		localStorage.setItem("habitlist", list);

		this.setState({ habits });
	};
	handleDelete = (habit) => {
		//id가 같지 않은 요소들로만 다시 배열을 만들어준다
		const habits = this.state.habits.filter((item) => item.id !== habit.id);
		const list = JSON.stringify(habits);
		localStorage.setItem("habitlist", list);

		this.setState({ habits });
	};

	onAdd = (name) => {
		const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }];
		const list = JSON.stringify(habits);
		localStorage.setItem("habitlist", list);
		this.setState({ habits });
	};
	handleReset = () => {
		const habits = this.state.habits.map((habit) => {
			if (habit.count !== 0) {
				return { ...habit, count: 0 };
			}
			return habit;
		});
		const list = JSON.stringify(habits);
		localStorage.setItem("habitlist", list);

		this.setState({ habits });
	};

	render() {
		const habit = this.state.habits;
		return (
			<React.StrictMode>
				<Navbar totalCount={this.state.habits.filter((item) => item.count > 0).length} />
				<Habits
					habit={habit}
					onIncrement={this.handleIncrement}
					onDecrement={this.handleDecrement}
					onDelete={this.handleDelete}
					onAdd={this.onAdd}
					onReset={this.handleReset}
				/>
			</React.StrictMode>
		);
	}
}

export default App;
