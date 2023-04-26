import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const Login = ({ setLogin }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    setLogin(true);
    localStorage.setItem('login', true)
    console.log("Submitted");
    navigate('/home')
  }

  return (
    <div className="login-container">
      <div className="login-img">
        <img src="/images/login-image.jpg" alt="login" loading="lazy"/>
      </div>
      <div className="login-content">
        <h1 className="login-logo">Ecommerce</h1>
        <div className="login-form">
          <h2 className="login">Login</h2>
          <form className="login--form" onSubmit={handleSubmit}>
            <div className="login--form-input">
              <input value={email} type="email" name="email" required onChange={(event) => setEmail(event.target.value)}/>
              <label htmlFor="email">Email</label>
            </div>
            <div className="login--form-input">
              <input value={password} type="password" name="password" required onChange={(event) => setPassword(event.target.value)}/>
              <label htmlFor="password">Password</label>
            </div>
            <Link to="/signup" className="signup-link">
              Don't have an account? Sign Up for free.
            </Link>
            <input type="submit" value="Login" className="login-btn"/>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login