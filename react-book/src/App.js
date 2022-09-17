import { Component } from 'react'
import LifCycleSample from './component/LifeCycleSample'

class App extends Component {
  state = {
    color: '#000000',
  }
  handleClick = () => {
    this.setState({
      color: this.getRandomColor(),
    })
  }
  getRandomColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`
  }

  render() {
    return (
      <>
        <button onClick={this.handleClick}>랜덤색상</button>
        <LifCycleSample color={this.state.color} />
      </>
    )
  }
}
export default App
