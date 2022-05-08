import { React, useState } from "react";

function App() {
	const [toDo, setTodo] = useState("");
	const [toDos, setTodos] = useState([]);
	const onChange = (e) => {
		setTodo(e.target.value);
	};
	const onSubmit = (e) => {
		e.preventDefault();
		if (toDo === "") return;
		setTodos((currentArray) => [toDo, ...currentArray]);
		setTodo("");
	};
	return (
		<div>
			<h1>My To Do List ({toDos.length}) </h1>
			<form onSubmit={onSubmit}>
				<input
					value={toDo}
					onChange={onChange}
					type="text"
					placeholder="write your to do.."
				/>
				<button>Add To Do</button>
			</form>
			<hr />
			<ul>
				{toDos.map((todo, idx) => {
					return <li key={idx}>{todo}</li>;
				})}
			</ul>
		</div>
	);
}

export default App;
