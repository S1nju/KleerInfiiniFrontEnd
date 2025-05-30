
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Logincallback from './pages/website/auth/logincallback'
import Login from './pages/website/auth/login'
import Err404 from './pages/website/auth/404'
import Rauth from './pages/website/auth/rauth'
import RegisterProducteur from './pages/website/auth/registerProducteur'
import RegisterClient from './pages/website/auth/registerClient'
import SignupChoose from './pages/website/auth/SignupChoose'
import ProducteurEspace from './pages/website/main pages/Comp/Producteur/ProducteurEspace'
import Profil from './pages/website/main pages/Comp/Producteur/Profil'
import ListProduits from './pages/website/main pages/Comp/Producteur/ListProduits'
import Contact from './pages/website/main pages/Comp/Producteur/Contact'
import NavBarproducteur from './pages/website/main pages/Comp/Producteur/NavBarproducteur'
import Dashbord from './pages/dashboard/dashboardcomp/dashbord'
import SlideBar from './pages/dashboard/dashboardcomp/SlideBar'
import Navbardashbord from './pages/dashboard/dashboardcomp/Navbardashbord'
import SuiviInteractions from './pages/dashboard/dashboardcomp/SuiviInteractions'
import SuiviPaiements from './pages/dashboard/dashboardcomp/SuiviPaiements'
import Statis from './pages/dashboard/dashboardcomp/Statis'

function App() {

  return (
   <Routes>
   
   <Route element={
   <Logincallback></Logincallback>}>
   <Route path="login" element={
   <Login></Login>}></Route>
   

 <Route path="ProducteurEspace" element={
   <ProducteurEspace></ProducteurEspace>}></Route>
    <Route path="Contact" element={
   <Contact></Contact>}></Route>
   <Route path="ListProduits" element={
   <ListProduits></ListProduits>}></Route>
   
   <Route path="NavBarproducteur" element={
   <NavBarproducteur></NavBarproducteur>}></Route>
   
 

      
 <Route path="Dashbord" element={
   <Dashbord></Dashbord>}></Route>
   
 
     
 <Route path="SlideBar" element={
   <SlideBar></SlideBar>}></Route>
   
   <Route path="Navbardashbord" element={
   <Navbardashbord></Navbardashbord>}></Route>
    <Route path="SuiviInteractions" element={
   <SuiviInteractions></SuiviInteractions>}></Route>
   
   
    <Route path="SuiviPaiements" element={
   <SuiviPaiements></SuiviPaiements>}></Route>
 
    <Route path="Statis" element={
   <Statis></Statis>}></Route>







   
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
   <Route element={<Rauth allowedRole={['client']}></Rauth>}>
   
   </Route>
   
   </Routes>





  )
}

export default App