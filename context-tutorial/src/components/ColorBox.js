import { useContext } from 'react'
import ColorContext, { ColorConsumer } from '../contexts/color'

const ColorBox = () => {
  const { state } = useContext(ColorContext)
  return (
    <>
      <div
        style={{
          width: '64px',
          height: '64px',
          background: state.color,
        }}
      ></div>
      <div
        style={{
          width: '64px',
          height: '64px',
          background: state.subColor,
        }}
      ></div>
    </>
  )
}
export default ColorBox
