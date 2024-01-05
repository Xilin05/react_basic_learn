import React, { useState } from 'react'

function FunctionState() {
  let curCount = 50
  const [newCount, setCount] = useState(curCount)

  function handleAdd() {
    setCount(newCount + 1)
  }
  function handleSub() {
    setCount(newCount - 1)
  }

  return (
    <>
      <div>这里是函数组件，当前组件状态值：{newCount}</div>
      <button onClick={handleAdd}>增加</button>
      <button onClick={handleSub}>减少</button>
    </>
  )
}

export default FunctionState
