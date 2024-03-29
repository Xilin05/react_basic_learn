import React from 'react'

class Content extends React.Component {
  componentWillMount() {
    console.log('Component WILL MOUNT!')
  }
  componentDidMount() {
    console.log('Component DID MOUNT!')
  }
  componentWillReceiveProps(newProps) {
    console.log('Component WILL RECEIVE PROPS!')
  }
  shouldComponentUpdate(newProps, newState) {
    return true
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('Component WILL UPDATE!')
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('Component DID UPDATE!')
  }
  componentWillUnmount() {
    console.log('Component WILL UNMOUNT!')
  }

  render() {
    return (
      <div>
        <h3>{this.props.myNumber}</h3>
      </div>
    )
  }
}

class Button extends React.Component {
  constructor(props) {
    super(props)
    this.state = { data: 0 }
    this.setNewNumber = this.setNewNumber.bind(this)
  }

  setNewNumber() {
    this.setState({ data: this.state.data + 1 })
  }
  render() {
    return (
      <div>
        <button onClick={this.setNewNumber}>INCREMENT</button>
        <Content myNumber={this.state.data}></Content>
      </div>
    )
  }
}

export default Button
