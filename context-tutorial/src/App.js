import './App.css'
import ColorBox from './components/ColorBox'
import { ColorProvider } from './contexts/color'
import SelectColors from './contexts/SelectColor'

function App() {
  return (
    <div className='App'>
      <ColorProvider>
        <div>
          <SelectColors />
          <hr />
          <ColorBox />
        </div>
      </ColorProvider>
    </div>
  )
}

export default App
