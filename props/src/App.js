import React from "react";
import Memorizedbtn from "./btn";

function App() {
	const text = ["Save changes", "Confirm"];
	const [value, setValue] = React.useState("Save Changes");
	const changeValue = () => setValue("Revert Changes");
	return (
		<>
			<Memorizedbtn text={value} onClick={changeValue} fontSize={18} />
			<Memorizedbtn text="Continue" />
		</>
	);
}

export default App;
