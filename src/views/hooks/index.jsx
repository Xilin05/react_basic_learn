import { useState, useEffect, useRef, useContext } from 'react'

import UseReducer from './use-reducer'

import UseContext from './use-context'

import Disscount from './disscount'

function UseState() {
  let usingValue = 100

  const [newValue, changeValue] = useState((v1, v2, v3) => {
    console.log('v1', v1)
    console.log('v2', v2)
    console.log('v3', v3)
    return usingValue
  })

  const reduceHandler = () => {
    changeValue((v1, v2, v3) => {
      console.log('change, v1', v1)
      console.log('change, v2', v2)
      console.log('change, v3', v3)
      return 0
    })
  }
  const addHandler = () => {
    changeValue((v1, v2, v3) => {
      console.log('change, v1', v1)
      console.log('change, v2', v2)
      console.log('change, v3', v3)
      return newValue + 1
    })
  }

  return (
    <div>
      使用useState来改变数据，当前：{newValue}
      <div>
        <button className='custom-btn btn-primary' onClick={addHandler}>
          增加
        </button>
        <button className='custom-btn btn-danger' onClick={reduceHandler}>
          减少
        </button>
      </div>
    </div>
  )
}

function UseRef() {}

function imitateHttpPerson(param) {
  return new Promise((resolve, rejcet) => {
    setTimeout(() => {
      const data = {
        status: 200,
        msg: '请求成功',
        data: {
          username: 'laisheng',
          nickname: '赖生',
          phone_number: '1787000000',
          address: '深圳市龙华区龙华街道环智中心'
        }
      }

      resolve(data)
    }, 3000)
  })
}

function UseEffect(props) {
  const { payload } = props
  const { user_id } = payload

  const [loading, setLoading] = useState(true)
  const [testValue, changeValue] = useState(1)
  const [userInfo, setUserInfo] = useState({})

  const fetchData = async () => {
    setLoading(true)
    const { status, msg, data } = await imitateHttpPerson({ user_id })
    setUserInfo(data)
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [user_id])

  const handleChange = () => {
    setTimeout(() => {
      changeValue(testValue + 1)

      console.log(testValue)
    }, 3000)
  }

  useEffect(() => {
    console.log('testValue发生了变化', testValue)
    // handleChange()
  }, [testValue])

  if (loading === true) {
    return <p>Loading ...</p>
  }

  return (
    <div>
      <p>You're viewing: {userInfo?.nickname}</p>
      <p>phone_number: {userInfo?.phone_number}</p>
      <p>address: {userInfo?.address}</p>
    </div>
  )
}

export default function Index() {
  const users = [{ user_id: '1000001' }, { user_id: '1000002' }]
  const currentUser = { user_id: '1000001' }

  setTimeout(() => {
    currentUser.user_id = '1000002'

    console.log('currentUser', currentUser)
  }, 5000)

  return (
    <>
      <UseState />

      <hr />

      <UseEffect payload={currentUser} />

      <hr />

      <UseReducer />

      <hr />

      <UseContext />

      <hr />

      {/* <Disscount /> */}
    </>
  )
}
