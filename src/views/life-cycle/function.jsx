import React, { useState, useEffect } from 'react'

export default function FuncLife(props) {
  const [num1, changeNum1] = useState(0)
  const [num2, changeNum2] = useState(10)

  // 组合------------------------------------------------------

  // 场景1: 初始化加载
  useEffect(() => {
    console.log('初始化加载')
    console.log(num1, '???', props)
  }, [])

  //场景2: 任意数据更新,但是初始化不加载
  useEffect(() => {
    return () => {
      console.log('数据发生修改了')
    }
  })
  //场景3: 只有卸载时加载
  useEffect(() => {
    return () => {
      console.log('卸载才会调用')
    }
  }, [])
  //场景4: 某一数据发生改变,单独触发
  useEffect(() => {
    return () => {
      console.log('只有修改num1才会调用')
    }
  }, [num1])

  return (
    <div>
      <p>
        数值1:{num1}
        <button onClick={() => changeNum1(num1 + 1)}>修改数值1</button>
      </p>
      <p>
        数值2:{num2}
        <button onClick={() => changeNum2(num2 - 1)}>修改数值2</button>
      </p>
    </div>
  )
}
