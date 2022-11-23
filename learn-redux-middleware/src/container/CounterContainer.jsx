import React from 'react'
import Counter from '../compoenents/Counter'
import {
  increase,
  decrease,
  increaseAsync,
  decreaseAsync,
} from '../modules/counter'
import { connect } from 'react-redux'

const CounterContainer = ({
  number,
  increaseAsync,
  decreaseAsync,
  increase,
  decrease,
}) => {
  return (
    <Counter
      number={number}
      onIncrease={increaseAsync}
      onDecrease={decreaseAsync}
    />
  )
}

export default connect((state) => ({ number: state.counter }), {
  increaseAsync,
  decreaseAsync,
})(CounterContainer)
