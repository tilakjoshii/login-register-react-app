// import React from 'react'
// import Login from './components/login'
// import Register from './components/register'
import Header from './components/header'
import Footer from './components/footer'
// import Error from './components/404'
import { Outlet } from 'react-router-dom'
// import { Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Header />
      <Outlet/>
      <Footer />
  </>
  )
}

export default App
