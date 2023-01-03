import React from 'react'
import { useSelector } from 'react-redux'

export default function UserData() {

    const userLogged = useSelector(state => state.auth)
    console.log(userLogged)
  return (
    <div>
        <h4>Hola! {userLogged.user.name}</h4>
        <h4>Eres usuario Administrador</h4>
    </div>
  )
}
