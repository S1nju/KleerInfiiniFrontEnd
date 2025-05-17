import { useState } from "react"
import './auth.css'
import { Link } from "react-router-dom"
import Loading from "../../loading/loading.tsx"
import Cookie from 'cookie-universal'
import Navbar from "./Components/NavBar.tsx"
export default  function Login(){
const [form,setform]=useState({

    email:'',
    password:'',
})
const[errtxt,seterrtxt]=useState('');
const [loading,setloading]=useState(false);
const [loading2,setloading2]=useState(false);
const [showPassword,setShowPassword]=useState(false)

const cookie = Cookie();

function check(e:any){


    setform({...form,[e.target.name]:e.target.value})
}

// async function submit(e){
//     e.preventDefault();
//     setloading(true)
// try {
//     let res=

//     await axios.post(baseurl+'/auth/'+login,form)
//     if(res.status===200){
//         window.location.pathname='/'
//         setloading(false)

//         const token = res.data;
//         console.log(token);
//         cookie.set('token',token)
//     }else{

//         seterrtxt('Invalid Email Or password');
//     }


// } catch (error) {
//    console.log(error);
//    seterrtxt('Invalid Email Or password');
//    setloading(false)
//    setshow(true)

// }


// }



return(
<div className="bg-blue-900 h-[100dvh]"><Navbar></Navbar>
<div className="flex flex-col items-center justify-center  bg-blue-900 ">


    <div className="bg-white  shadow-xl/30 flex flex-col justify-center items-center  rounded-2xl p-5 m-10">
    {/* {errtxt!==''&&     <Alert show={show} style={{position:'absolute',bottom:'25px'}} key={'danger'} variant={'danger'}>
       <i className="fa-regular fa-circle-xmark"></i>  {errtxt}   <Button onClick={() => setshow(false)} variant="outline-sucsses">
       <i className="fa-solid fa-xmark"></i>
          </Button> </Alert>} */}


<h2 className="text-4xl text-blue-700">Connexion</h2>

<hr></hr>
<hr></hr>

<form className="flex w-80 flex-col" >
<div>
       
      
        {/*    <!-- Component: Plain large input with leading icon  --> */}
      <div className="relative my-6">
        <input
          id="id-l12"
          type="text"
          name="email"
          placeholder="votre email"
          value={form.email}
          className="peer relative h-12 w-full border-b border-slate-200 px-4 pl-12 text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
          onChange={check}
          required
        />
        <label
          htmlFor="id-l12"
          className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:left-10 peer-placeholder-shown:text-base peer-autofill:-top-2 peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:left-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
        >
           Email
        </label>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-3 left-4 h-6 w-6 stroke-slate-400 peer-disabled:cursor-not-allowed"
          fill="none"
          aria-hidden="true"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-labelledby="title-5 description-5"
          role="graphics-symbol"
        >
          <title id="title-5">Check mark icon</title>
          <desc id="description-5">Icon description here</desc>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
        <small className="absolute flex w-full justify-between px-4 py-1 text-xs text-slate-400 transition peer-invalid:text-pink-500">
          <span>
            
            veuillez entrer votre email 
          </span>
          
        </small>
      </div>
      {/*    <!-- End Plain large input with leading icon --> */}
    
    
      
      
      
      </div>

  <div className="mb-3" >
    
      {/*    <!-- Component: Plain large input with trailing icon  --> */}
      <div className="relative my-6">
        <input
          id="id-l14"
          type={showPassword ? "text" : "password"}
          name="password"
          value={form.password}
          placeholder="mot de passe"
          className="peer relative h-12 w-full border-b border-slate-200 px-4 pr-12 text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
          onChange={check}
          required
        />
        <label
          htmlFor="id-l14"
          className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-autofill:-top-2 peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
        >
           Mot de passe
        </label>
        {showPassword ? (
          <svg
            onClick={() => setShowPassword(!showPassword)}
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-3 right-4 h-6 w-6 cursor-pointer stroke-slate-400 peer-disabled:cursor-not-allowed"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-labelledby="title-6 description-6"
            role="graphics-symbol"
          >
            <title id="title-6">Check mark icon</title>
            <desc id="description-6">Icon description here</desc>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
        ) : (
          <svg
            onClick={() => setShowPassword(!showPassword)}
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-3 right-4 h-6 w-6 cursor-pointer stroke-slate-400 peer-disabled:cursor-not-allowed"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-labelledby="title-6d description-6d"
            role="graphics-symbol"
          >
            <title id="title-6d">Check mark icon</title>
            <desc id="description-6d">Icon description here</desc>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
            />
          </svg>
        )}
        <small className="absolute flex w-full justify-between px-4 py-1 text-xs text-slate-400 transition peer-invalid:text-pink-500">
          <span>
            veuillez entrer votre mot de passe
          </span>
          
        </small>
      </div>
      {/*    <!-- End Plain large input with trailing icon --> */}
    
     
     
     
      </div>



    
  


    <button  className="inline-flex items-center justify-center h-8 gap-2 px-4 text-xs font-medium tracking-wide text-white transition duration-300 rounded whitespace-nowrap bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-blue-300 disabled:bg-blue-300 disabled:shadow-none">
    {(loading)? <><Loading></Loading></>:<span>Se Connecter</span>}</button>
    
    <button onClick={()=>  setloading2(true)} className="w-full">
        <a className="flex items-center justify-center gap-2" style={{ 
            display:'flex',textDecoration:'none',color:'white'}} href="http://127.0.0.1:8000/login-google">{(loading2)? <><Loading></Loading></>:<><i className="fa-brands fa-google-plus"></i></>}Login with google</a></button>


</form>
<p>
    ou bien  <Link to='/signup' className="text-blue-400" ><b>Créer un compte </b></Link></p>

</div>
</div>
</div>

)


}