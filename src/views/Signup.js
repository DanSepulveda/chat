import { useState } from 'react'
import { Link } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../config/firebase'

const Signup = (props) => {
  const [usuario, setUsuario] = useState({})

  const crearCuenta = async () => {
    let respuesta = await createUserWithEmailAndPassword(auth, usuario.email, usuario.password)
    // verificar respuesta, revisando el objeto y viendo alguna propiedad de que todo salió bien
    props.setLogged(true)
    window.localStorage.setItem('user', respuesta.user.uid)
  }

  const manejarInputs = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="form-container">
      <h1>Crear cuenta</h1>
      <label htmlFor="email">Correo</label>
      <input
        type="email"
        name="email"
        id="email"
        onChange={(e) => manejarInputs(e)}
      />
      <label htmlFor="password">Contraseña</label>
      <input
        type="password"
        name="password"
        id="password"
        onChange={(e) => manejarInputs(e)}
      />
      <button onClick={crearCuenta}>Crear cuenta</button>
      <Link to="/login">Iniciar sesión</Link>
    </div>
  )
}

export default Signup
