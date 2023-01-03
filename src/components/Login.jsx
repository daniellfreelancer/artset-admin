import React from 'react';
import '../styles/Login.css';
import logo from '../assets/artsetLogoDark.png'



export default function Login() {
  return (
    <div className="container div-container-contact">

    <form className="shadow-lg div-form" id="contact">
        <div className='div-logo-title'>
        <img src={logo} alt="logo" className='img-logo py-2' />
        </div>

    <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Nombre
        </label>
        <input
          type="email"
          className="form-control input-field input-contact"
          placeholder="Nombre"
        />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Correo Electrónico
        </label>
        <input
          type="email"
          className="form-control input-field input-contact"
          placeholder="Correo Electrónico"
        />
      </div>

      <div className="mb-3 d-flex justify-content-center">
          <button className="ingreso-btn shadow w-50" >Ingresar</button>
      </div>
    </form>
  </div>
  )
}
