import React from 'react'
import Home from '../../pages/Home'
import Footer from '../Footer/Footer'
import Routers from '../../Routers/Routers'
import Header from '../Header/Header'

const Layout = () => {
  return (
    <>
      <Header/>
      <div>
        <Routers/>
      </div>
      <Footer/>
    </>
  )
}

export default Layout
