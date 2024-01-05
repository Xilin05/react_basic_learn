import React from 'react'
import { createRoot } from 'react-dom/client'

// import Button from './button'
// import Hello from './hello'
// import HttpImitate from './http-imitate'
import Count from './example'
import Clock from './clock'

import ExampleComponent from './example_com'

import FuncLife from './function'

class LifeCycle extends React.Component {
  constructor(props) {
    super(props)
  }

  unmountDom() {
    createRoot(document.getElementById('component-clock')).unmount()
  }

  // component-clock

  render() {
    return (
      <>
        {/* <Clock /> */}
        {/* <Count /> */}

        {/* <button onClick={this.unmountDom}>卸载</button> */}
        <hr />
        {/* <ExampleComponent /> */}

        <FuncLife />
      </>
    )
  }
}

export default LifeCycle
