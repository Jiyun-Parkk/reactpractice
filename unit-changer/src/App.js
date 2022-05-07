import "./App.css";
import React from "react";
import Converter from "./converter";

function App() {
	const [index, setIndex] = React.useState("intro");
	const onSelect = (e) => {
		setIndex(e.target.value);
	};
	return (
		<div>
			<h1>Super Converter</h1>
			<select value={index} onChange={onSelect}>
				<option value="intro">Please select converter</option>
				<option value="0">Minutes & Hours</option>
				<option value="1">Miles & Kilometers</option>
			</select>
			<hr />

			{index === "intro" ? null : <Converter idx={index} />}
		</div>
	);
}

export default App;
