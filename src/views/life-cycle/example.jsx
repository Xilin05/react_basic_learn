import React from 'react'
import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'

class TestChild extends React.Component {
  //组件将要卸载的钩子
  UNSAFE_componentWillUnmount() {
    console.log('Count---componentWillUnmount')
  }
  render() {
    return <div id='test-child'>测试卸载子节点</div>
  }
}

//创建组件
class Count extends React.Component {
  //构造器
  constructor(props) {
    console.log('Count---constructor')
    super(props)
    //初始化状态
    this.state = { count: 0 }
  }
  //加1按钮的回调
  add = () => {
    //获取原状态
    const { count } = this.state
    //更新状态
    this.setState({ count: count + 1 })
  }
  //卸载组件按钮的回调
  death = () => {
    // ReactDOM.unmountComponentAtNode(document.getElementById('calculate-node'))
    createRoot(document.getElementById('test-child')).unmount()
  }
  //强制更新按钮的回调
  force = () => {
    this.forceUpdate()
  }
  //组件将要挂载的钩子
  UNSAFE_componentWillMount() {
    console.log('Count---componentWillMount')
  }
  //组件挂载完毕的钩子
  componentDidMount() {
    console.log('Count---componentDidMount')
  }
  //组件将要卸载的钩子
  componentWillUnmount() {
    console.log('Count---componentWillUnmount')
  }
  //控制组件更新的“阀门”
  shouldComponentUpdate() {
    console.log('Count---shouldComponentUpdate')
    return true
  }
  //组件将要更新的钩子
  UNSAFE_componentWillUpdate() {
    console.log('Count---componentWillUpdate')
  }
  //组件更新完毕的钩子
  componentDidUpdate() {
    console.log('Count---componentDidUpdate')
  }
  render() {
    console.log('Count---render')
    const { count } = this.state
    return (
      <div id='example-node'>
        <h2 id='calculate-node'>当前求和为：{count}</h2>
        <TestChild />
        <button onClick={this.add}>点我+1</button>
        <button onClick={this.death}>卸载组件</button>
        <button onClick={this.force}>
          不更改任何状态中的数据，强制更新一下
        </button>
      </div>
    )
  }
}

export default Count
