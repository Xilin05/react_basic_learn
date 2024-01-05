import React, { createRef } from 'react'
import './App.css'
import './test.scss'

// 来个列表
const songs = [
  { id: 1, name: '痴心绝对' },
  { id: 2, name: '像我这样的人' },
  { id: 3, name: '南山南' }
]

const styleObj = {
  color: 'red'
}

// 来个布尔值
const flag = true
const showTitle = true

function HelloFun() {
  const clickHandler = (e, name) => {
    console.log('我是 HelloFun 的点击事件，被触发了', name, e)
  }
  return (
    <>
      <div onClick={(e) => clickHandler(e, 'clickHandler')}>
        我是 HelloFun 函数组件
      </div>
    </>
  )
}

class ClassComponent extends React.Component {
  state = {
    count: 0
  }

  clickHandler = (e, num) => {
    // 这里的this指向的是正确的当前的组件实例对象
    // 可以非常方便的通过this关键词拿到组件实例身上的其他属性或者方法
    this.setState({
      count: this.state.count + num
    })
  }

  clickHandler_1() {
    // 这里的this 不指向当前的组件实例对象而指向undefined 存在this丢失问题
    console.log('clickHandler_1 this', this)
  }

  render() {
    return (
      <div>
        <div>我是Class组件，当前state值：{this.state.count}</div>
        <button onClick={(e) => this.clickHandler(e, 2)}>按钮1</button>
      </div>
    )
  }
}

class InputComponent extends React.Component {
  state = {
    remark: '这里是输入框的值'
  }

  msgRef = createRef()

  changeHandler = (e) => {
    console.log(this.msgRef.current.value)

    this.setState({ remark: e.target.value })
  }

  render() {
    return (
      <>
        <div>{this.state.remark}</div>
        <input
          ref={this.msgRef}
          type="text"
          value={this.state.remark}
          onChange={this.changeHandler}
        />

        <button onClick={this.changeHandler}>click</button>
      </>
    )
  }
}

function App() {
  return (
    <div className="App">
      <ul>
        {songs.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
      {/* 条件渲染字符串 */}
      {flag ? 'react真有趣' : 'vue真有趣'}
      {/* 条件渲染标签/组件 */}
      {flag ? <span>this is span</span> : null}
      {true && <span>this is span</span>}
      {false && <span>this is span</span>}

      <div style={styleObj}>this is a div - style</div>

      <div className={showTitle ? 'test-bind-class' : ''}>
        这里是动态绑定 className
      </div>

      <HelloFun />

      <ClassComponent />

      <InputComponent />
    </div>
  )
}

export default App
