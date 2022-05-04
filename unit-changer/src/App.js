import "./App.css";
import React from "react";

function App() {
	const [amount, setAmount] = React.useState(0);
	const [inverted, setinverted] = React.useState(false);
	const onChange = (event) => {
		setAmount(event.target.value);
	};
	const reset = () => {
		setAmount(0);
	};
	const onFlip = () => {
		reset();
		setinverted((inverted) => !inverted);
	};
	return (
		<div>
			<div>
				<h1>Super Converter</h1>
				<label htmlFor="minutes">Minutes</label>
				<input
					value={inverted ? amount * 60 : amount}
					id="minutes"
					placeholder="Minutes"
					type="number"
					onChange={onChange}
					disabled={inverted}
				/>
				<h4>You want to convert {amount}</h4>
			</div>
			<div>
				<label htmlFor="hours">Hours</label>
				<input
					value={inverted ? amount : Math.floor(amount / 60)}
					id="hours"
					placeholder="Hours"
					type="number"
					onChange={onChange}
					disabled={!inverted}
				/>
			</div>
			<button onClick={reset}>reset</button>
			<button onClick={onFlip}>{inverted ? "Turn back" : "Invert"}</button>
		</div>
	);
}

export default App;
