import React from 'react'

function Footer() {
  return (
    <footer className=' h-40 text-center text-lg-start flex items-center justify-center bg-light text-white'>
       <p>Kleer Infini &copy; {new Date().getFullYear()} | All rights reserved</p> 
    </footer>
  )
}

export default Footer