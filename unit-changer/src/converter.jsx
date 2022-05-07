import React from "react";

function Converter(props) {
	const [time, setTime] = React.useState(0);
	const [distance, setDistance] = React.useState(0);
	const [timeInvert, setTimeinvert] = React.useState(false);
	const [distanceInvert, setDistanceinvert] = React.useState(false);
	const selected = props.idx;

	const onChange = (event) => {
		selected === "0"
			? setTime(event.target.value)
			: setDistance(event.target.value);
	};
	const reset = () => {
		selected === "0" ? setTime(0) : setDistance(0);
	};
	const onFlip = () => {
		reset();
		selected === "0"
			? setTimeinvert((inverted) => !inverted)
			: setDistanceinvert((inverted) => !inverted);
	};

	const minutesHours = {
		title1: "Minutes",
		title2: "Hours",
		convert1: timeInvert ? time * 60 : time,
		convert2: timeInvert ? time : Math.floor(time / 60),
	};
	const kmMiles = {
		title1: "Miles",
		title2: "Kilometers",
		convert1: distanceInvert ? distance * 1000 : distance,
		convert2: distanceInvert ? distance : Math.floor(distance / 1000),
	};

	let unit = null;
	let invert = null;
	let convertNum = null;
	if (selected === "0") {
		unit = minutesHours;
		invert = timeInvert;
		convertNum = time;
	} else {
		unit = kmMiles;
		invert = distanceInvert;
		convertNum = distance;
	}

	return (
		<div>
			<div>
				<label htmlFor="small">{unit.title1}</label>
				<input
					value={unit.convert1}
					id="small"
					placeholder={unit.title1}
					type="number"
					onChange={onChange}
					disabled={invert}
				/>
				<h4>You want to convert {convertNum}</h4>
			</div>
			<div>
				<label htmlFor="big">{unit.title2}</label>
				<input
					value={unit.convert2}
					id="big"
					placeholder={unit.title2}
					type="number"
					onChange={onChange}
					disabled={!invert}
				/>
			</div>
			<button onClick={reset}>reset</button>
			<button onClick={onFlip}>{invert ? "Turn back" : "Invert"}</button>
		</div>
	);
}

export default Converter;
