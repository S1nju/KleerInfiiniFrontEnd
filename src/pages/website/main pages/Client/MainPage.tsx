
import Navbar from './Comp/NavBar'

import Footer from './Comp/Footer'
import { Outlet } from 'react-router-dom'

function MainPage() {
  return (
    <>
      <Navbar></Navbar>
<Outlet></Outlet>
<Footer></Footer>
    </>
  )
}

export default MainPage