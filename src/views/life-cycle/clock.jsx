import React from 'react'

// class Clock extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = { date: new Date() }
//   }

//   state = {}

//   componentDidMount() {
//     this.timerID = setInterval(() => this.tick(), 1000)
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerID)
//   }

//   tick() {
//     this.setState({
//       date: new Date()
//     })
//   }

//   render() {
//     return (
//       <div>
//         <h1>Hello, Shining!</h1>
//         <h2>现在时间是：{this.state.date.toLocaleTimeString()}</h2>
//       </div>
//     )
//   }
// }

const s2 = {
  color: 'red'
}
class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: true,
      date: new Date(),
      text: '隐藏'
    }
    this.handleShow = this.handleShow.bind(this)
  }
  //定义挂载函数(钩子函数)
  componentDidMount() {
    this.timerID = setInterval(() => {
      this.tick(), 1000
    }) //创建定时器，每隔一秒钟调用一次函数
  }
  //定义tick函数 更新状态机中的date
  tick() {
    this.setState({
      date: new Date()
    })
  }
  //定义事件响应函数：用来更新状态机中的show和text（决定显示在按钮上的文本）
  handleShow() {
    this.setState({
      show: !this.state.show,
      text: !this.state.show ? '隐藏' : '显示'
    })
    // this.setState(state=>{
    //     show:!state.show;
    //     text:!state.show?'隐藏':'显示'
    // })
  }
  //组件卸载函数（钩子函数）：清除定时器
  UNSAFE_componentWillUnmount() {
    console.log('卸载')
    clearInterval(this.timerID)
  }
  render() {
    let isShow = this.state.show
    let element
    if (isShow) {
      element = <h2 style={s2}>{this.state.date.toLocaleTimeString()}</h2>
    } else {
      element = null
    }
    return (
      <div id='component-clock'>
        <button onClick={this.handleShow}>{this.state.text}计时器</button>
        <br />
        <br />
        {element}
      </div>
    )
  }
}

export default Clock
