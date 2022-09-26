import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { decrease, increase } from '../modules/counter';
import { useCallback } from 'react';

const CounterContainer = () => {
  const number = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();
  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};

//방법 1) mapState, mapDispatch 함수 각각 만들어서  파라미터에 넣어주기
//mapStateToProps => 리덕스 스토어 안의 state를 컴포넌트의 Props로 넘겨준다
//mapDispatchToProps => 액션 생성 함수를 컴포넌트의 Props로 넘겨주기 위해 사용

//const mapStateToProps = (state) => ({
//  number: state.counter.number,
//});
//const mapDispatchToProps = (dispatch) => ({
//  increase: () => {
//    dispatch(increase());
//  },
//  decrease: () => {
//    dispatch(decrease());
//  },
//});
//export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);

//방법 2) 함수를 따로 만들지 않고 connect에 넣어주기
//export default connect(
//  (state) => ({
//    number: state.counter.number,
//  }),
//  (dispatch) => ({
//    increase: () => dispatch(increase()),
//    decrease: () => dispatch(decrease()),
//  }),
//)(CounterContainer);

//방법3) bindActionCreators로 action 함수 키값으로 묶어주기
//export default connect(
//  (state) => ({
//    number: state.counter.number,
//  }),
//  (dispatch) =>
//    bindActionCreators(
//      {
//        increase,
//        decrease,
//      },
//      dispatch,
//    ),
//)(CounterContainer);

//방법 4) 객체로만 묶어주면 connect 함수가 내부적으로 bindActionCreators 작업을 대신 해준다
//export default connect(
//  (state) => ({
//    number: state.counter.number,
//  }),
//  { increase, decrease },
//)(CounterContainer);

//방법 5) hook 사용하기

export default React.memo(CounterContainer);
