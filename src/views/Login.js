import { Link } from 'react-router-dom'
import { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../config/firebase'

const Login = (props) => {
  const [usuario, setUsuario] = useState({})

  const iniciarSesion = async () => {
    let respuesta = await signInWithEmailAndPassword(auth, usuario.email, usuario.password)
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
      <h1>Iniciar sesión</h1>
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
      <button onClick={iniciarSesion}>Iniciar sesión</button>
      <Link to="/signup">Crear cuenta</Link>
    </div>
  )
}

export default Login
