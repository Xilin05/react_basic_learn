import { Route, Routes } from 'react-router-dom'

function MenuBar() {
  return <div>这里是侧边栏</div>
}

function AppMain() {}

function Header() {}

function MainBox() {}

function SubMainBox() {}

function Footer() {}

function AppRoutes() {
  const menuBars = [
    {
      name: '菜单路由-1',
      path: 'menu-1',
      id: Math.random().toString(36).substr(2)
    },
    {
      name: '菜单路由-2',
      path: 'menu-2',
      id: Math.random().toString(36).substr(2),
      children: [
        {
          name: '菜单路由-2_1',
          path: 'menu-2-1',
          id: Math.random().toString(36).substr(2)
        },
        {
          name: '菜单路由-2_2',
          path: 'menu-2-2',
          id: Math.random().toString(36).substr(2)
        },
        {
          name: '菜单路由-2_3',
          path: 'menu-2-3',
          id: Math.random().toString(36).substr(2)
        }
      ]
    },
    {
      name: '菜单路由-3',
      path: 'menu-3',
      id: Math.random().toString(36).substr(2)
    },
    {
      name: '菜单路由-4',
      path: 'menu-4',
      id: Math.random().toString(36).substr(2)
    }
  ]

  return (
    <>
      <ul>
        <map name=''></map>
      </ul>
      <Routes>
        {menuBars.map(bar => (
          <Route key={bar.id} path={bar.path} element={<MainBox />}>
            {bar.children &&
              bar.children.map(cBar => (
                <Route
                  key={cBar.id}
                  path={cBar.path}
                  element={<SubMainBox />}
                />
              ))}
          </Route>
        ))}
      </Routes>
    </>
  )
}

function Layout() {
  return (
    <>
      <MenuBar />
    </>
  )
}

export default Layout
