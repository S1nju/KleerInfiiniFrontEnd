
import Cookie from 'cookie-universal'
import {  Outlet } from 'react-router-dom';

export default function Logincallback() {
  const cookie = Cookie();

if(cookie.get('token')){
  
  window.history.back()

return <></>

}
  else{ 
  
  return <Outlet></Outlet>}
}
