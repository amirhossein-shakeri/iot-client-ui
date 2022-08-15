import { useState } from "react"
import api from "../api"

export const LoginPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const handleSubmit = e => {
    e.preventDefault()
    api
      .login({ email, password })
      .then(res => {
        console.log("Response: ", res)
      })
      .catch(err => {
        console.log("Error: ", err, err.response)
        alert("Failed to login: " + err.message)
      })
  }

  return (
    <div className="login-container w-full h-screen flex flex-col justify-center items-center p-2 gap-2 mt-16">
      <div className="login p-3 bg-white shadow-lg flex flex-col gap-4 rounded-lg">
        <h1 className="title text-center text-3xl font-bold">Login</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div className="row">
            <label>
              Email:
              <input
                onChange={e => setEmail(e.currentTarget.value)}
                value={email}
                className="mt-1"
                name="email"
                type="text"
                placeholder="Enter your email ..."
              />
            </label>
          </div>

          <div className="row">
            <label>
              Password:
              <input
                onChange={e => setPassword(e.currentTarget.value)}
                value={password}
                className="mt-1"
                type="password"
                name="password"
                placeholder="Enter your username ..."
              />
            </label>
          </div>

          <div className="row flex justify-end">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
        </form>
      </div>
      {/* <Link to="/" className="text-blue-600 text-sm">
        Home
      </Link> */}
    </div>
  )
}

export default LoginPage
