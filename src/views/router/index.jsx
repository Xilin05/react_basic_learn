import React, { useState } from 'react'
import {
  Route,
  Routes,
  useLocation,
  Link,
  BrowserRouter,
  useNavigate,
  useSearchParams,
  useParams,
  Outlet
} from 'react-router-dom'

import './index.scss'

import Layout from './blog'
// function Product() {
//   const location = useLocation()
//   const { from, pathname } = location

//   return (
//     <div>
//       这里是{pathname}，你来自于{from}
//     </div>
//   )
// }

function ProductCard(props) {
  const { product } = props
  const navigate = useNavigate()

  const navigateHandler = payload => navigate(`/product/${product.id}`)

  return (
    <div className='product-card' onClick={navigateHandler}>
      <div className='product-img'>
        {product?.img_url && (
          <img src={product?.img_url} alt='' className='img-class' />
        )}
      </div>
      <div className='product-info'>
        <div className='product-name'>{product?.name || '-'}</div>
        <div className='product-sku'>{product?.sku || '-'}</div>
      </div>
    </div>
  )
}

function Dashboard() {
  let [searchParams, setSearchParams] = useSearchParams()

  const routeParams = {
    username: searchParams.get('username'),
    address: searchParams.get('address')
  }

  const sortList = [
    { name: '第一类', id: Math.random().toString(36).substr(2) },
    { name: '第二类', id: Math.random().toString(36).substr(2) },
    { name: '第三类', id: Math.random().toString(36).substr(2) }
  ]

  const productList = [
    {
      id: Math.random().toString(36).substr(2),
      name: '产品名称1',
      sku: 'product-sku-1'
    },
    {
      id: Math.random().toString(36).substr(2),
      name: '产品名称2',
      sku: 'product-sku-2'
    },
    {
      id: Math.random().toString(36).substr(2),
      name: '产品名称3',
      sku: 'product-sku-3'
    }
  ]

  const navigate = useNavigate()
  const navigatorHandler = sort => navigate(`/type/detail`, { state: { sort } })

  return (
    <div className='component-dashboard'>
      首页
      {routeParams.username && <div>当前用户：{routeParams.username}</div>}
      <div className=''>
        {sortList.map(sort => (
          <span
            key={sort.id}
            to=''
            style={{ marginRight: '8px' }}
            onClick={() => navigatorHandler(sort)}
          >
            {sort.name}
          </span>
        ))}
      </div>
      <div className='box-list'>
        {productList.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

function Type() {
  return (
    <div>
      分类
      <Outlet />
    </div>
  )
}

function TypeDetail() {
  const { sort } = useLocation()?.state
  console.log('sort', sort)

  return <div>分类详情，来自：{sort.name}</div>
}

function Product() {
  const params = useParams()
  console.log('useParams params', params)
  const productInfo = {
    name: '产品示例1',
    sku: 'product-sku-6',
    supplier: {
      name: '产品供应商-1',
      address: '广东省深圳市龙华区',
      email: 'supplier_1@163.com'
    }
  }
  return (
    <div>
      产品页面
      <div>产品名称：{productInfo.name}</div>
      <div>产品SKU：{productInfo.sku}</div>
      <div>供应商：{productInfo.supplier.name}</div>
      <div>发货地址：{productInfo.supplier.address}</div>
      <Link to='/product/detail'>查看详情</Link>
      <div className=''></div>
    </div>
  )
}

function ProductDetail() {
  return <div>产品详情页面</div>
}

function imitateLogin() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const userInfo = {
        username: 'shining',
        address: '广东省深圳市龙华区'
      }
      resolve({ status: 200, msg: '登陆成功', data: userInfo })
    }, 1000)
  })
}

function UserCenter() {
  const currentStatus = '未登陆'
  const [newStatus, changeStatus] = useState(currentStatus)
  const navigate = useNavigate()

  const loginHandler = async () => {
    const { status, data } = await imitateLogin()
    if (status === 200) {
      changeStatus('登陆成功，即将回到首页')
      setTimeout(() => {
        navigate(`/?username=${data.username}&address=${data.address}`)
      }, 3000)
    }
  }

  return (
    <div>
      用户中心，当前状态：{newStatus}
      <div>
        <button className='custom-btn btn-primary' onClick={loginHandler}>
          登陆
        </button>
      </div>
    </div>
  )
}

function CatchAll() {
  return <div>Not Found</div>
}

function Nav() {
  return (
    <ul>
      <li>
        <Link to=''>首页</Link>
      </li>
      <li>
        <Link to='/product'>产品</Link>
      </li>
      <li>
        <Link to='/type'>分类</Link>
      </li>
      <li>
        <Link to='/user-center'>用户</Link>
      </li>
    </ul>
  )
}

function MenuBar() {
  return (
    <>
      <h1>Welcome To React Shop!!!</h1>
      <Nav />
      <Routes>
        <Route path='/' element={<Dashboard />}></Route>
        <Route path='/product/:id' element={<Product />}>
          {/* <Route path='/product/detail/:id' element={<Dashboard />}></Route> */}
        </Route>
        <Route path='/type' element={<Type />}>
          <Route path='/type/detail' element={<TypeDetail />}></Route>
        </Route>
        <Route path='/user-center' element={<UserCenter />}></Route>
        <Route path='*' element={<CatchAll />}></Route>
      </Routes>
    </>
  )
}

function Index() {
  return (
    <BrowserRouter>
      {/* <MenuBar /> */}
      <Layout />
    </BrowserRouter>
  )
}

export default Index
