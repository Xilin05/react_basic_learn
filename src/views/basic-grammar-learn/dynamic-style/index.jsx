import './index.scss'

const style = {
  color: 'red',
  fontWeight: 'bold'
}

function DynamicStyle() {
  return (
    <div className="component-dynamic-style">
      <div style={style}>这里是测试动态样式的组件 - 行内样式</div>
      <div className="class-mode">这里是测试动态样式的组件 - 类名模式</div>
    </div>
  )
}

export default DynamicStyle
