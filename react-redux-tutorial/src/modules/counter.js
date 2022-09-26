import { createAction, handleActions } from 'redux-actions';

// acrion type 지정 => 모듈이름/ 액션이름
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

//action 생성 함수 만들어주기
//export const increase = () => ({ type: INCREASE });
//export const decrease = () => ({ type: DECREASE });
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

//초기 상태
const initialState = {
  number: 0,
};

//리듀서 함수
//const counter = (state = initialState, action) => {
//  switch (action.type) {
//    case INCREASE:
//      return { number: state.number + 1 };
//    case DECREASE:
//      return { number: state.number - 1 };
//    default:
//      return state;
//  }
//};
const counter = handleActions(
  {
    [INCREASE]: (state, action) => ({ number: state.number + 1 }),
    [DECREASE]: (state, action) => ({ number: state.number - 1 }),
  },
  initialState,
);

export default counter;
