import React from 'react'

class ClassState extends React.Component {
  // 初始化state
  state = {
    count: 50
  }

  handleAdd = () => {
    // 修改state，使用 this.setState
    this.setState({
      count: this.state.count + 1
    })
  }
  handleSub = () => {
    // 修改state，使用 this.setState
    this.setState({
      count: this.state.count - 1
    })
  }

  render() {
    return (
      <>
        <div>这里是类组件，当前存在值：{this.state.count} </div>
        <button onClick={this.handleAdd}>增加</button>
        <button onClick={this.handleSub}>减少</button>
      </>
    )
  }
}

export default ClassState
