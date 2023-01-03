import React, { useRef } from 'react';
import '../styles/Login.css';
import logo from '../assets/artsetLogoDark.png'
import { useSigninMutation } from '../features/loginAPI';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert2';



export default function Login() {

  const passwordAdmin = useRef();
  const emailAdmin = useRef();
  const goHome = useNavigate();

  const [loginReducer] = useSigninMutation();

  const handleLogin = (e) => {
    e.preventDefault();


    let user = {
      
      email:emailAdmin.current.value,
      password:passwordAdmin.current.value,
      from: "form"
    }


    loginReducer(user)
    .then((res)=>{
      if (res.error){
        let dataError = res.error
        let dataMessage = dataError.data
        swal.fire({
          title: "Error!",
          text: dataMessage.message,
          icon: "error",
        });

        } else {

          let dataResponse = res.data
          let dataSuccess = dataResponse.message
          swal.fire({
            text: dataSuccess,
            icon: "success",
          });
          let inputForm = document.querySelector("#contact");
          inputForm.reset();
          goHome('/home')

        }
    }).catch((error) =>{
      console.log(error)
    })
  }





  return (
    <div className="container div-container-contact">

    <form className="shadow-lg div-form" id="contact">
        <div className='div-logo-title'>
        <img src={logo} alt="logo" className='img-logo py-2' />
        </div>


      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Correo Electrónico
        </label>
        <input
          type="email"
          className="form-control input-field input-contact"
          placeholder="Correo Electrónico"
          ref={emailAdmin}
        />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Contraseña
        </label>
        <input
          type="password"
          className="form-control input-field input-contact"
          placeholder="ingrese su contraseña"
          ref={passwordAdmin}
        />
      </div>

      <div className="mb-3 d-flex justify-content-center">
          <button onClick={handleLogin} className="ingreso-btn shadow w-50" >Ingresar</button>
      </div>
    </form>
  </div>
  )
}
