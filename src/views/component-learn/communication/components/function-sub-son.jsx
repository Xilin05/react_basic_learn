import React, { createContext } from 'react'

const { Consumer } = createContext()

function FunctionSubSon() {
  return (
    <div>
      我是函数子组件的子组件
      <Consumer>
        {(value) => {
          console.log('value', value)
          return <div>111{value}</div>
        }}
      </Consumer>
    </div>
  )
}

export default FunctionSubSon
