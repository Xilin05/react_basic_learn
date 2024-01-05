import React from 'react'

import ClassCom from './components/class-com'
import FunctionCom from './components/function-com'

class StateCom extends React.Component {
  payload = {
    a: 1
  }
  render() {
    return (
      <>
        <ClassCom data={this.payload} test={1} />
        <FunctionCom />
      </>
    )
  }
}

export default StateCom
