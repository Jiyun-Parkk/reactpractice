/* esLint-disable */
//warning 안보고싶으믄 eslint는 잘못된 코딩 관습을 잡아주는 경고 라이브러리
import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

//App.js는 실제로 표현되는 페이지의 html을 짜는것
//여기서 짠 html을 #root에 넣는것을 index.js에서 실행한다.
//node_modules => 사용할 라이브러리들
//public => 정적인 자료들 이미지 등이 있음
//package.json 설치한 라이브러리 목록들이 있음
//jsx문법을 사용한다 => 데이터바인딩이 매우 쉬워짐 그래서 react를 사용한다
//style은 object 형식으로 넣는다 자바스크립트에서 넣듯이
//useState =>리액트 문법 위에 useState를 넣어주면 리액트에 있는 내장 함수 하나를 쓰겠습니다~라는 의미
//useState를 쓰면 배열이 두개가 만들어진다 [a,b]
//첫번째는 useState에 넣어준 데이터가 들어가고 두번째 배열요소에는 데이터를 변경해줄 함수가 하나 들어간다
//[state data, state data 변경해주는 함수]
//state를 쓰는 이유는 데이터가 변경되었을때 새로고침없이 html을 다시 렌더링 해주기 때문이다=>웹앱처럼 동작
//따라서 자주 변경되는 데이터를 state로 만들어서 작업한다
//소괄호를 붙이면 함수가 바로 실행되니까 주의

function App() {
	let [title, changeTitle] = useState([
		"남자 코트 추천",
		"강남 우동 맛집",
		"여자 스커트 추천",
	]);
	let [num, changeNum] = useState(0);

	function changeTxt() {
		//state 데이터를 복사해서 수정하는게 더 좋음
		//	let newArr = title; //데이터 참조
		let newArr = [...title]; //deep copy 완전히 카피
		// newArr[0] = "여자 운동화 추천";
		changeTitle(newArr.sort());
	}

	return (
		<div className="App">
			<div className="black-nav">개발 블로그</div>
			<div className="list">
				<h3>
					{title[0]}
					<span
						onClick={() => {
							changeNum((num += 1));
						}}
					>
						👍
					</span>{" "}
					{num}
				</h3>
				<p>2월 17일 발행</p>
				<hr />
			</div>
			<div className="list">
				<h3>
					{title[1]}
					<span onClick={changeTxt}>제목변경</span>
				</h3>
				<p>2월 17일 발행</p>
				<hr />
			</div>
			<div className="list">
				<h3>{title[2]}</h3>
				<p>2월 17일 발행</p>
				<hr />
			</div>
			<Modal />
			{/* <Modal/> 이렇게 써도됨 */}
		</div>
	);
}

//component 만들기
//1.이름을 대문자로 시작해서 만드는게 좋다 =>관습적인것
//2.return 소괄호 안에 div 태그 안에 html 구조를 넣는다
//3. div 대신에 fragment를 사용 가능 <> </>
//4. 반복적으로 똑같이 출현하는 템플릿을 컴포넌트로 만들면 좋다
//5. 자주바뀌는(렌더링이 자주 되어야 하는) UI도 컴포넌트로 만들면 좋다
//6. 다른 페이지를 만들떄도 컴포넌트로 만듬
//=>단점 : state쓸떄 복잡해짐=>props 문법을 써야한다
function Modal() {
	return (
		<div>
			<div className="modal">
				<h2>제목</h2>
				<p>날짜</p>
				<p>상세내용</p>
			</div>
		</div>
	);
}

export default App;
