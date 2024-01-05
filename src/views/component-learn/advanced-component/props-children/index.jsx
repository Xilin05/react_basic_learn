import React from 'react'

function PropsChildren(props) {
  console.log('props', props)

  return <div>组件的子节点：{props.children}</div>
}

function PropsFather() {
  return (
    <>
      <div>
        <PropsChildren>
          <p>这里是传入的子组件</p>
          <p>这里是传入的子组件</p>
          <p>这里是传入的子组件</p>
          <p>这里是传入的子组件</p>
          <p>这里是传入的子组件</p>
        </PropsChildren>
      </div>
    </>
  )
}

export default PropsFather
