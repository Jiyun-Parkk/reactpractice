import React from "react";
import propTypes from "prop-types";

const Memorizedbtn = React.memo(Savebtn);
Savebtn.propTypes = {
	text: propTypes.string.isRequired,
	fontSize: propTypes.number,
};

function Savebtn({ text, onClick, fontSize = 16 }) {
	console.log(`${text} rendered`);
	const buttonStyle = {
		backgroundColor: "tomato",
		color: "white",
		padding: "10px 20px",
		border: 0,
		borderRadius: "10px",
		marginRight: "10px",
		cursor: "pointer",
		fontSize,
	};
	return (
		<button style={buttonStyle} onClick={onClick}>
			{text}
		</button>
	);
}

export default Memorizedbtn;
