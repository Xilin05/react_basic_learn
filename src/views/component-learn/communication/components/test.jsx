import React, { createContext } from 'react'

// 1. 创建Context对象
const { Provider, Consumer } = createContext()

// 3. 消费数据
function ComC() {
  return (
    <Consumer>
      {(value) => {
        console.log('ComC', value)
        return <div>{value}</div>
      }}
    </Consumer>
  )
}

function ComA() {
  return <ComC />
}

// 2. 提供数据
class TestConsumer extends React.Component {
  state = {
    message: 'this is message'
  }
  render() {
    return (
      <Provider value={this.state.message}>
        <div className="test-consumer">
          <ComA />
        </div>
      </Provider>
    )
  }
}

export default TestConsumer
