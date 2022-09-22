import { useContext } from 'react'
import ColorContext, { ColorConsumer } from './color'

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

const SelectColors = () => {
  const { actions } = useContext(ColorContext)
  return (
    <div>
      <h2>색상을 선택하세요</h2>

      <div style={{ display: 'flex', marginBottom: '20px' }}>
        {colors.map((color) => (
          <div
            key={color}
            style={{
              background: color,
              width: '40px',
              height: '40px',
              cursor: 'pointer',
            }}
            onClick={() => actions.setColor(color)}
            onContextMenu={(e) => {
              e.preventDefault()
              actions.setSubColor(color)
            }}
          ></div>
        ))}
      </div>
    </div>
  )
}
export default SelectColors
