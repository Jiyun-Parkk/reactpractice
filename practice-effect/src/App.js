import { useState, useEffect } from "react";

function Hello() {
	useEffect(() => {
		console.log("hi");
		return () => console.log("bye");
	}, []);

	return <h1>Hello</h1>;
}
function App() {
	// const [counter, setValue] = useState(0);
	// const [keyword, setKeyword] = useState("");
	// const onChange = (e) => {
	// 	setKeyword(e.target.value);
	// };
	// const onClick = () => setValue((prev) => prev + 1);

	// useEffect(() => {
	// 	console.log("I run only once");
	// }, []); //뒤에 빈배열만 넣으면 render를 최초에 한번만

	// useEffect(() => {
	// 	if (keyword.length !== "" && keyword.length > 5) {
	// 		console.log(`Search for ${keyword}`);
	// 	}
	// }, [keyword]); //뒤에 배열에는 지켜볼 대상을 넣는다 타깃에 변화가 있을떄만 렌더
	// useEffect(() => {
	// 	console.log(`I run only click counter`);
	// }, [counter]); //뒤에 배열에는 지켜볼 대상을 넣는다
	// useEffect(() => {
	// 	console.log(`I run when change counter and keyword`);
	// }, [counter, keyword]);

	// cleanup

	const [showing, setShowing] = useState(false);
	const onClick = () => setShowing((prev) => !prev);
	return (
		<div>
			<button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
			{showing ? <Hello /> : null}
			{/* <input
				value={keyword}
				onChange={onChange}
				type="text"
				placeholder="Search here..."
			/>
			<h1>{counter}</h1>
			<button onClick={onClick}>click me</button> */}
		</div>
	);
}

export default App;
