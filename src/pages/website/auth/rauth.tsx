import { Navigate, Outlet } from "react-router-dom";
import Cookie from 'cookie-universal'
import { useContext, useEffect, useState } from "react";

import { user } from "../../../api/api";
import Loading from "../../loading/loading";
import { Axios } from "../../../api/axios";
import Err403 from "./403";
import { UserContext } from "../../../contex/userCon";
export default function Rauth({allowedRole}:{allowedRole:string[]}){
    const [u,setu]=useState('');

const {user,setuser}= useContext(UserContext)
    const cookie = Cookie();
    /*  useEffect(()=>{
        try {
             Axios.get('/auth/'+user).then(d=>{setu(d)
             })
        } catch (e) { console.log(e)
            window.location.pathname='/login'
        }
    },[])*/



    return(cookie.get('token')?
    ( user===''?
    <div style={{width:"100%",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center"}}> <Loading></Loading></div>
    :  ( allowedRole.filter((authority) => { return authority === user.role})? <Outlet></Outlet> :  <Err403></Err403>) ):<Navigate to='/login' replace={true}></Navigate>)
}
