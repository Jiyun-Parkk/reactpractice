import { useState } from 'react';
import './App.css';

function App() {
  //react.useSate() => [data, function]
  let [counter,setCounter] = useState(0);
  let [text,setText] = useState("nothing")
  function countUp(){
    counter = counter + 1;
    setCounter(counter)
    if(counter > 10 && counter < 20) {
      setText("more than ten!")
    } else if (counter > 20 && counter < 30){
      setText("more than twenty!")
    }
  
  }
  return (
    <div className="App">
     <h3>total count: {counter}</h3>
     <h3>result : {text}</h3>
     <button onClick={countUp}>click</button>
    </div>
  );
}

export default App;
