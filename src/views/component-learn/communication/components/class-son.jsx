import React from 'react'

class ClassSon extends React.Component {
  state = {
    name: 'class-son'
  }

  getProps = () => {}

  sendMessage = (type = 'father', content = '我是来自类模式子组件的信息') => {
    this.props.trigger({
      target: type,
      content: content
    })
  }

  render() {
    return (
      <div className="component-class-son">
        这里是类模式子组件
        <div style={{ color: 'red' }}>
          来自父组件的数据：{this.props.origin.message_father}
        </div>
        <div style={{ color: 'blue' }}>
          来自父组件的公共数据：{this.props.origin.message_common}
        </div>
        <button
          onClick={() =>
            this.sendMessage('father', '我是来自类模式子组件的信息')
          }>
          ClassSon - 向父组件传递数据
        </button>
        <button
          onClick={() =>
            this.sendMessage('common', '我是类模式子组件，修改了公共数据')
          }>
          ClassSon - 修改公共数据
        </button>
      </div>
    )
  }
}

export default ClassSon
