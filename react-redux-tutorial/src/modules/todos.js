import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const CHANGE_INPUT = 'todos/CHANGE_INPUT'; //인풋값 변경
const INSERT = 'todos/INSERT'; //새로운 todo 등록
const TOGGLE = 'todos/TOGGLE'; //todo를 체크 / 체크 해제함
const REMOVE = 'todos/REMOVE'; //todo를 제거함

//export const changeInput = (input) => ({
//  type: CHANGE_INPUT,
//  input,
//});

//export const insert = (todos, text) => ({
//  type: INSERT,
//  todo: {
//    id: todos.length,
//    text,
//    done: false,
//  },
//});

//export const toggle = (id) => ({
//  type: TOGGLE,
//  id,
//});

//export const remove = (id) => ({
//  type: REMOVE,
//  id,
//});

//변형을 주고 싶다면 함수를 따로 넣고
// 파라미터를 그대로 넣어주고 싶다면 정적 데이터만

export const changeInput = createAction(CHANGE_INPUT, (input) => input);
export const insert = createAction(INSERT, (todos, text) => ({
  id: todos.length,
  text,
  done: false,
}));
export const toggle = createAction(TOGGLE, (id) => id);
export const remove = createAction(REMOVE, (id) => id);

const initialState = {
  input: '',
  todos: [],
};

//const todos = (state = initialState, action) => {
//  switch (action.type) {
//    case CHANGE_INPUT:
//      return {
//        ...state,
//        input: action.input,
//      };
//    case INSERT:
//      return {
//        ...state,
//        todos: state.todos.concat(action.todo),
//      };
//    case TOGGLE:
//      return {
//        ...state,
//        todos: state.todos.map((todo) =>
//          todo.id === action.id ? { ...todo, done: !todo.done } : todo,
//        ),
//      };
//    case REMOVE:
//      return {
//        ...state,
//        todos: state.todos.filter((todo) => todo.id !== action.id),
//      };

//    default:
//      return state;
//  }
//};

const todos = handleActions(
  {
    [CHANGE_INPUT]: (state, { payload: input }) =>
      produce(state, (draft) => {
        draft.input = input;
      }),
    [INSERT]: (state, { payload: todo }) =>
      produce(state, (draft) => {
        draft.todos.push(todo);
      }),
    [TOGGLE]: (state, { payload: id }) =>
      produce(state, (draft) => {
        const todo = draft.todos.find((todo) => todo.id === id);
        todo.done = !todo.done;
      }),
    [REMOVE]: (state, { payload: id }) =>
      produce(state, (draft) => {
        const index = draft.todos.findIndex((todo) => todo.id === id);
        draft.todos.splice(index, 1);
      }),
  },
  initialState,
);

export default todos;
