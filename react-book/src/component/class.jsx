import { Component } from 'react'

export default class Test extends Component {
  constructor(props) {
    super(props)
    this.state = {
      number: 0,
    }
  }
  render() {
    const name = 'react'
    const { number } = this.state
    return (
      <div>
        {name}
        {this.props.children}
        <button
          onClick={() => {
            this.setState({
              number: number + 1,
            })
          }}
        >
          click
        </button>
        <button
          onClick={() => {
            this.setState(
              (prev, props) => ({
                number: prev.number + 1,
              }),
              () => {
                console.log(this.props)
              }
            )
          }}
        >
          click
        </button>
        {number}
      </div>
    )
  }
}
