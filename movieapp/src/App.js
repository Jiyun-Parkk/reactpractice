import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
// switch 라우트 한개씩만 렌더링 하기 위해
// 원하는 path에 원하는 컴포넌트를 실행시킬 수 있음
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="movie/:id" element={<Detail />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
