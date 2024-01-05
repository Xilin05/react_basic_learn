import React, { createContext } from 'react'
import ClassSon from './components/class-son'
import FunctionSon from './components/function-son'
import TestConsumer from './components/test.jsx'

// 1. 创建Context对象
const { Provider } = createContext()

class Communication extends React.Component {
  state = {
    name: 'Communication-Father',
    message_son: '',
    message_father: '我是父组件的数据',
    message_common: '我是公共数据',
    message_sub: '我是跨组件传递的数据'
  }

  getDataFromSon = (payload) => {
    const { target, content } = payload
    console.log('getDataFromSon msg', content)
    this.setState({
      ['message_' + target]: content
    })
  }

  render() {
    return (
      <div>
        <TestConsumer />
        <div style={{ backgroundColor: '#ffa159', color: 'white' }}>
          来自子组件的数据：{this.state.message_son || '暂无数据'}
        </div>
        <ClassSon origin={this.state} trigger={this.getDataFromSon} />
        <div style={{ color: '#5a5a5a', margin: '12px 0px' }}>
          ------------ 组件分割线 -------------
        </div>
        <Provider value={this.state.message_sub}>
          <FunctionSon origin={this.state} trigger={this.getDataFromSon} />
        </Provider>
      </div>
    )
  }
}

export default Communication
