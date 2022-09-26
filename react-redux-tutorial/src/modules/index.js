import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';

const rootReducer = combineReducers({
  counter,
  todos,
});

export default rootReducer;
//여러개의 리듀서를 하나로 합쳐준다
//createStore는 하나의 리듀서만 사용 할 수 있다.
