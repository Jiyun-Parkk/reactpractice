import { createStore } from 'redux'

const divToggle = document.querySelector('.toggle')
const counter = document.querySelector('.counter')
const btnIncrease = document.querySelector('#increase')
const btnDecrease = document.querySelector('#decrease')

const TOGGLE_SWITCH = 'TOGGLE_SWITCH'
const INCREASE = 'INCREASE'
const DECREASE = 'DECREASE'

//action 객체 생성해주는 action 함수 만들어주기
const toggleSwitch = () => ({ type: TOGGLE_SWITCH })
const increase = (difference) => ({ type: INCREASE, difference })
const decrease = () => ({ type: DECREASE })

//초기값
const initialState = {
  toggle: false,
  counter: 0,
}

//리듀서 함수
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SWITCH:
      return {
        ...state,
        toggle: !state.toggle,
      }
    case INCREASE:
      return {
        ...state,
        counter: state.counter + action.difference,
      }
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      }
    default:
      return state
  }
}

const store = createStore(reducer)

const render = () => {
  const state = store.getState() // 현재상태
  if (state.toggle) {
    divToggle.classList.add('active')
  } else {
    divToggle.classList.remove('active')
  }
  counter.innerHTML = state.counter
}
render()
store.subscribe(render) // 상태가 업데이트 될 떄마다 렌더 함수 호출
divToggle.addEventListener('click', () => {
  store.dispatch(toggleSwitch())
})

btnIncrease.addEventListener('click', () => {
  store.dispatch(increase(1))
})

btnDecrease.addEventListener('click', () => {
  store.dispatch(decrease())
})
