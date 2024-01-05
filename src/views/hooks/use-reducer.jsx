import React, { useReducer } from 'react'

function reducerAction(state, action) {
  console.log('state', state)
  console.log('action', action)
  const { type } = action

  switch (type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

function UseReducer() {
  const [count, dispath] = useReducer(reducerAction, 0)

  return (
    <>
      <div>
        <p>当前值：{count}</p>

        <button
          className='custom-btn btn-primary'
          onClick={() => dispath({ type: 'INCREMENT' })}
        >
          增加
        </button>
        <button
          className='custom-btn btn-danger'
          onClick={() => dispath({ type: 'DECREMENT' })}
        >
          减少
        </button>
      </div>
    </>
  )
}

export default UseReducer
