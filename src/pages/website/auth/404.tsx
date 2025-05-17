import React from 'react'
import { Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export default function Err404() {
  return (
    <div className='parent404'>
<div className='texts404 '>
  <h1 className='text-danger' style={{
    fontSize:'80px',
    textAlign:'center'
  }}>404</h1>
  <h5 style={{

    textAlign:'center'
  }}>Not Found</h5>
</div>
<div>
<div className='image404'></div>
</div>
<div>
  <NavLink to='/'>
  <button >Go Back To home page</button></NavLink>
</div>



    </div>
  )
}
