
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Logincallback from './pages/website/auth/logincallback'
import Login from './pages/website/auth/login'
import Err404 from './pages/website/auth/404'
import Rauth from './pages/website/auth/rauth'
import RegisterProducteur from './pages/website/auth/registerProducteur'
import RegisterClient from './pages/website/auth/registerClient'
import SignupChoose from './pages/website/auth/SignupChoose'
import MainPage from './pages/website/main pages/Client/MainPage'
import Produit from './pages/website/main pages/Client/Produit'
import LikedProducts from './pages/website/main pages/Client/LikedProducts'
import PageProduit from './pages/website/main pages/Client/PageProduit'
import Profile from './pages/website/main pages/Client/Profile'

function App() {

  return (
   <Routes>

   <Route element={
   <Logincallback></Logincallback>}>
   <Route path="login" element={
   <Login></Login>}></Route>
   <Route path="signup" >
<Route path="" element={
   <SignupChoose/>}></Route>
<Route path="client" element={
   <RegisterClient></RegisterClient>}></Route>
<Route path="producteur" element={
   <RegisterProducteur></RegisterProducteur>}></Route>
   </Route>

   </Route>
   {/* <Route path="/" element={
     <Landing></Landing>}></Route> */}
{/*
   <Route path="/auth/google/callback" element={
   <Redirect></Redirect>}></Route> */}
   <Route path="/*" element={
   <Err404></Err404>}></Route>
     <Route element={<Rauth allowedRole={[ 'client', 'prod']}></Rauth>}>

     </Route>
   <Route element={<Rauth allowedRole={[ 'client', 'prod']}></Rauth>}>

   </Route>
   <Route  element={<Rauth allowedRole={['client']}></Rauth>}>

   <Route path="/homepage/client" element={<MainPage></MainPage>}>

      <Route path="" element={<Produit></Produit>}>  </Route>
      <Route path="produit/:id" element={<PageProduit></PageProduit>}>


       </Route>

       <Route path="profile" element={<Profile></Profile>}>


      </Route>
      </Route>
   </Route>

   </Routes>
  )
}

export default App
