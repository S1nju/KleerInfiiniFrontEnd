
import  { useState } from "react"
import Navbar from "./Components/NavBar"
import {  Link, useNavigate } from "react-router-dom"
import React from "react"

export default function SignupChoose() {
    const location = useNavigate()
  const [clientchecked, setclientChecked] = useState(false)
  const [prodchecked, setprodChecked] = useState(false)
  function continuefunc():void {
    if (clientchecked) {
       location('/signup/client')
    }
    if (prodchecked) {
        location('/signup/producteur')
    }


  }
  return (<div className="bg-blue-900 h-[100dvh]">
<Navbar></Navbar>

    <div className="flex flex-col items-center justify-center  bg-blue-900 ">

    <div className="bg-white  shadow-xl/30 flex flex-col justify-center items-center  rounded-2xl p-5 m-10">
    {/* {errtxt!==''&&     <Alert show={show} style={{position:'absolute',bottom:'25px'}} key={'danger'} variant={'danger'}>
       <i className="fa-regular fa-circle-xmark"></i>  {errtxt}   <Button onClick={() => setshow(false)} variant="outline-sucsses">
       <i className="fa-solid fa-xmark"></i>
          </Button> </Alert>} */}


<h2 className="text-4xl text-blue-700 mb-10">
    Choisissez votre type de compte
</h2>

<hr></hr>
<hr></hr>
<div className="flex flex-col flex-wrap gap-2 mb-4 items-center justify-center">
      {/*<!-- Component: Primary checkbox with helper text --> */}
      <div className="relative flex flex-wrap items-center">
        <input
          className="peer h-4 w-4 cursor-pointer appearance-none rounded border-2 border-slate-500 bg-white transition-colors checked:border-blue-500 checked:bg-blue-500 checked:hover:border-blue-600 checked:hover:bg-blue-600 focus:outline-none checked:focus:border-blue-700 checked:focus:bg-blue-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-slate-100 disabled:bg-slate-50"
          type="checkbox"
          checked={prodchecked}
          onChange={() => {
            setprodChecked(!prodchecked)
            setclientChecked(false)
        }}
          id="id-c03"
        />
        <label
          className="cursor-pointer pl-2 text-slate-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400"
          htmlFor="id-c03"
        >
          Compte producteur
        </label>
        <small className="w-full py-2 pl-6 text-xs text-slate-400 transition peer-invalid:text-pink-500">
          <span>
            Vous êtes un producteur des produits ,inscrivez-vous ici
          </span>
        </small>
        <svg
          className="pointer-events-none absolute left-0 top-1 h-4 w-4 -rotate-90 fill-white stroke-white opacity-0 transition-all duration-300 peer-checked:rotate-0 peer-checked:opacity-100 peer-disabled:cursor-not-allowed"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          aria-labelledby="title-3 description-3"
          role="graphics-symbol"
        >
          <title id="title-3">Check mark icon</title>
          <desc id="description-3">
            Check mark icon to indicate whether the radio input is checked or
            not.
          </desc>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.8116 5.17568C12.9322 5.2882 13 5.44079 13 5.5999C13 5.759 12.9322 5.91159 12.8116 6.02412L7.66416 10.8243C7.5435 10.9368 7.37987 11 7.20925 11C7.03864 11 6.87501 10.9368 6.75435 10.8243L4.18062 8.42422C4.06341 8.31105 3.99856 8.15948 4.00002 8.00216C4.00149 7.84483 4.06916 7.69434 4.18846 7.58309C4.30775 7.47184 4.46913 7.40874 4.63784 7.40737C4.80655 7.406 4.96908 7.46648 5.09043 7.57578L7.20925 9.55167L11.9018 5.17568C12.0225 5.06319 12.1861 5 12.3567 5C12.5273 5 12.691 5.06319 12.8116 5.17568Z"
          />
        </svg>
      </div>
      {/*<!-- End Primary checkbox with helper text --> */}

       {/*<!-- Component: Primary checkbox with helper text --> */}
      <div className="relative flex flex-wrap items-center">
        <input
          className="peer h-4 w-4 cursor-pointer appearance-none rounded border-2 border-slate-500 bg-white transition-colors checked:border-blue-500 checked:bg-blue-500 checked:hover:border-blue-600 checked:hover:bg-blue-600 focus:outline-none checked:focus:border-blue-700 checked:focus:bg-blue-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-slate-100 disabled:bg-slate-50"
          type="checkbox"
          checked={clientchecked}
           onChange={() => {
            setclientChecked(!clientchecked)
        
            setprodChecked(false)}}
          id="id-c04"
        />
        <label
          className="cursor-pointer pl-2 text-slate-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400"
          htmlFor="id-c04"
        >
          Compte Client
        </label>
        <small className="w-full py-2 pl-6 text-xs text-slate-400 transition peer-invalid:text-pink-500">
          <span>
            Vous êtes un client qui achète des produits, inscrivez-vous ici
          </span>
        </small>
        <svg
          className="pointer-events-none absolute left-0 top-1 h-4 w-4 -rotate-90 fill-white stroke-white opacity-0 transition-all duration-300 peer-checked:rotate-0 peer-checked:opacity-100 peer-disabled:cursor-not-allowed"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          aria-labelledby="title-3 description-3"
          role="graphics-symbol"
        >
          <title id="title-3">Check mark icon</title>
          <desc id="description-3">
            Check mark icon to indicate whether the radio input is checked or
            not.
          </desc>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.8116 5.17568C12.9322 5.2882 13 5.44079 13 5.5999C13 5.759 12.9322 5.91159 12.8116 6.02412L7.66416 10.8243C7.5435 10.9368 7.37987 11 7.20925 11C7.03864 11 6.87501 10.9368 6.75435 10.8243L4.18062 8.42422C4.06341 8.31105 3.99856 8.15948 4.00002 8.00216C4.00149 7.84483 4.06916 7.69434 4.18846 7.58309C4.30775 7.47184 4.46913 7.40874 4.63784 7.40737C4.80655 7.406 4.96908 7.46648 5.09043 7.57578L7.20925 9.55167L11.9018 5.17568C12.0225 5.06319 12.1861 5 12.3567 5C12.5273 5 12.691 5.06319 12.8116 5.17568Z"
          />
        </svg>
      </div>
      {/*<!-- End Primary checkbox with helper text --> */}
</div>

 <button onClick={continuefunc} className="inline-flex mb-5 items-center justify-center h-8 gap-2 px-4 text-xs font-medium tracking-wide text-white transition duration-300 rounded whitespace-nowrap bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-blue-300 disabled:bg-blue-300 disabled:shadow-none">
   <span>
     Continuer
    </span></button>
    <p>
    ou bien  <Link to='/login' className="text-blue-400" ><b>Se connecter</b></Link></p>
</div>
</div>
  </div> 
  )
}
