import React from 'react'
import './index.css'
import jpg_001 from '@/assets/img/001.jpg'
import jpg_002 from '@/assets/img/002.jpg'
import jpg_003 from '@/assets/img/003.jpg'
import jpg_004 from '@/assets/img/004.jpg'
import jpg_005 from '@/assets/img/005.jpg'

export default class Swipper extends React.Component {
  state = {
    index: 4,
    enumImg: {
      1: jpg_001,
      2: jpg_002,
      3: jpg_003,
      4: jpg_004,
      5: jpg_005
    }
  }
  render() {
    let { index } = this.state
    return (
      <div className='wrapper'>
        <img src={this.state.enumImg[index]} alt='' />
        <span
          onClick={() => {
            index--
            if (index <= 0) index = 4
            this.setState({
              index
            })
          }}
        >
          {' '}
          &lt;{' '}
        </span>
        <span
          onClick={() => {
            index++
            if (index >= 5) index = 1
            this.setState({
              index
            })
          }}
          className='right'
        >
          {' '}
          &gt;{' '}
        </span>
      </div>
    )
  }
}
