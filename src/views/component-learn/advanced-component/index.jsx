import React from 'react'
import PropTypes from 'prop-types'

import PropsFather from './props-children'

function ReceiptProp(props) {
  const arr = props.colors
  const colorList = arr.map((color, index) => <li key={index}>{color.name}</li>)

  return <ul>{colorList}</ul>
}
ReceiptProp.propTypes = {
  colors: PropTypes.array
}
ReceiptProp.defaultProps = {
  colors: [{ name: 'gray' }, { name: 'blue' }]
}

class PropsCheck extends React.Component {
  constructor(props) {
    super(props)
  }

  static defaultProps = {
    tempValue: '100',
    colors: [{ name: 'gray' }, { name: 'blue' }]
  }

  state = {}

  render() {
    return (
      <>
        <div>高级组件，{this.props.tempValue}</div>
      </>
    )
  }
}

export default PropsCheck
