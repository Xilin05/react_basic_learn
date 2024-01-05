import React, { useRef } from 'react'

function FuncRef(props) {
  const inputRef = useRef()

  const onFocus = e => {
    console.log('focus', e)
    inputRef.current.focus()
  }

  return (
    <div>
      <input ref={inputRef} type='text' />
      <button onClick={onFocus}>聚焦</button>
    </div>
  )
}

class ChildRef extends React.Component {
  constructor(props) {
    super(props)
  }

  childLog() {
    console.log('我是子组件的方法')
  }

  render() {
    return (
      <>
        <div>测试获取子组件ref</div>
      </>
    )
  }
}

class RefsCom extends React.Component {
  constructor(props) {
    super(props)
    this.targetRef = null
    this.refsComRef = React.createRef()
    this.childRef = e => (this.targetRef = e)
  }
  componentDidMount() {
    this.refsComRef.current.innerHTML = '通过refs修改了文案'
    // console.log('this.childRef', this.childRef)
    if (this.targetRef) {
      console.log('this.target', this.targetRef)
      this.targetRef.childLog()
    }
  }

  render() {
    return (
      <>
        <div ref={this.refsComRef}>学习refs</div>
        <ChildRef ref={this.childRef} />
        <hr />
        <FuncRef />
      </>
    )
  }
}

export default RefsCom
