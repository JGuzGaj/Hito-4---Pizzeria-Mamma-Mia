import { useState } from 'react'

const registerpage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!email || !password || !confirmPassword) {
      setMessage('❌ Todos los campos son obligatorios')
      return
    }

    if (password.length < 6) {
      setMessage('El password debe tener al menos 6 caracteres')
      return
    }

    if (password !== confirmPassword) {
      setMessage('Las contraseñas no coinciden')
      return
    }

    setMessage('Registro exitoso ✅')
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br /><br />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br /><br />

        <input
          type="password"
          placeholder="Confirmar contraseña"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <br /><br />

        <button type="submit">Enviar</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  )
}

export default registerpage