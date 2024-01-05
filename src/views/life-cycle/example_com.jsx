import React from 'react'

class ExampleComponent extends React.Component {
  // 用于初始化 state
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  // 用于替换 `componentWillReceiveProps` ，该函数会在初始化和 `update` 时被调用
  // 因为该函数是静态函数，所以取不到 `this`, 如果需要对比 `prevProps` 需要单独在 `state` 中维护
  // 它应返回一个对象来更新 state
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('nextProps', nextProps)
    console.log('prevState', prevState)

    return {}
  }

  // 判断是否需要更新组件，多用于组件性能优化
  shouldComponentUpdate(nextProps, nextState) {}

  // 组件挂载后调用
  // 可以在该函数中进行请求或者订阅
  componentDidMount() {}

  // 用于替换 componentWillUpdate ，该函数会在 update 后 DOM 更新前被调用
  // 用于读取最新的 DOM 数据。
  getSnapshotBeforeUpdate() {}

  // 组件即将销毁
  // 可以在此处移除订阅，定时器等等
  componentWillUnmount() {}

  // 组件销毁后调用
  componentDidUnMount() {}

  // 组件更新后调用
  componentDidUpdate() {}

  // 错误边界 - 渲染备用 UI
  // 更新 state 使下一次渲染能够显示降级后的 UI
  // 注意错误边界仅可以捕获其子组件的错误，它无法捕获其自身的错误
  static getDerivedStateFromError(error) {
    console.log('error', error)
    return { hasError: true }
  }

  // 错误边界 - 打印错误信息
  // 你同样可以将错误日志上报给服务器
  // 注意错误边界仅可以捕获其子组件的错误，它无法捕获其自身的错误
  componentDidCatch(error, info) {
    console.log(error, info)
  }

  // 渲染组件函数
  render() {}

  // 以下函数不建议使用
  // UNSAFE_componentWillMount() {}
  // UNSAFE_componentWillUpdate(nextProps, nextState) {}
  // 接收到新的props时调用
  // UNSAFE_componentWillReceiveProps(nextProps) {}

  render() {
    return (
      <>
        <div>组件生命周期测试</div>
      </>
    )
  }
}

export default ExampleComponent
