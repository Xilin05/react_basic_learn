import React, { useEffect, useState } from 'react'
import './disscount.scss'

function getMock() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ status: 200 })
    }, 3000)
  })
}

function UseEffect() {
  async function getMockRes() {
    const res = await getMock()
    return res
  }

  useEffect(() => {
    getMockRes()
  }, [])
}

// UseEffect()
function Calculator(props) {
  console.log('props', props)

  return (
    <div>
      计价器
      <input type='text' value={props.value} />
    </div>
  )
}

function Context(props) {
  const { userInfo = {}, pruchaseInfo = {} } = props
  const { username = '', role = 0 } = userInfo
  const { ori_val = 0, discount_val = 0 } = pruchaseInfo
  const enumTips = {
    0: { head: '亲爱的', rolename: '普通用户' },
    1: { head: '尊敬的', rolename: '普通会员' },
    2: { head: '尊贵的', rolename: '超级会员' }
  }

  return (
    <div className='context-info'>
      <div>{`${username || '-'}，您是${enumTips[role].head}的${
        enumTips[role].rolename
      }，欢迎您的光临`}</div>
      <div>
        你的购买总金额为：{ori_val}，折后价为：{discount_val}
      </div>
    </div>
  )
}

function Index() {
  const users = [
    {
      username: '李生',
      role: 0
    },
    {
      username: '徐生',
      role: 1
    },
    {
      username: '黄生',
      role: 2
    }
  ]

  let currentPrice = 0

  return (
    <div className='component-disscount'>
      商城折扣计价器
      <>
        {users?.map(user => {
          return <Context key={user.username} userInfo={user} />
        })}
      </>
      <Calculator value={currentPrice} />
    </div>
  )
}

export default Index
