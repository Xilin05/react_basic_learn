import React from 'react'
import FunctionSubSon from './function-sub-son'

function FunctionSon(props) {
  const { origin, trigger } = props

  function sendMessage(payload) {
    const { type = 'father', content = '我是来自类模式子组件的信息' } = payload
    trigger({ target: type, content: content })
  }

  return (
    <div className="component-class-son">
      这里是函数模式子组件
      <div style={{ color: 'red' }}>
        来自父组件的数据：{origin.message_father}
      </div>
      <div style={{ color: 'blue' }}>
        来自父组件的公共数据：{origin.message_common}
      </div>
      <button
        onClick={() =>
          sendMessage({
            type: 'father',
            content: '我是来自函数模式子组件的信息'
          })
        }>
        FunctionSon - 向父组件传递数据
      </button>
      <button
        onClick={() =>
          sendMessage({
            type: 'common',
            content: '我是函数模式子组件，修改了数据信息'
          })
        }>
        FunctionSon - 修改公共数据
      </button>
      <FunctionSubSon />
    </div>
  )
}

export default FunctionSon
