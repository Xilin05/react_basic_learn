import { createContext, useContext } from 'react'

function Header() {
  return (
    <>
      <div>Header</div>
    </>
  )
}
const Context = createContext()

function Logo() {
  const name = useContext(Context)

  return <div>底部logo {name}</div>
}

function Footer() {
  return (
    <div>
      Footer <Logo />
    </div>
  )
}

function Layout() {
  return (
    <Context.Provider value={'this is context name'}>
      <Footer></Footer>
    </Context.Provider>
  )
}

export default Layout
