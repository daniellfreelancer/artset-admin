import React from 'react'
import Login from '../components/Login'
import ('../styles/Welcome.css')

export default function Welcome() {
  return (
    <div className='div-container-welcome' >
        <div className='div-img'></div>
        <div className='div-login'><Login/></div>
    </div>
  )
}
