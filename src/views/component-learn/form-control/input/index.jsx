import React, { createRef } from 'react'

class InputComponent extends React.Component {
  inputRef = createRef()

  state = {
    message: ''
  }

  changeHandler = e => {
    // this.setState({
    //   message: e.target.value
    // })

    console.log('this.inputRef', this.inputRef.current.value)
  }

  render() {
    return (
      <>
        <div>
          input组件
          <input
            type='text'
            ref={this.inputRef}
            onChange={this.changeHandler}
          />
        </div>
      </>
    )
  }
}

export default InputComponent
