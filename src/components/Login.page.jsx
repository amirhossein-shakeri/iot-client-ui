import { Link } from "react-router-dom"

export const LoginPage = () => {
  return (
    <div className="login-container w-full h-screen flex flex-col justify-center items-center p-2 gap-2">
      <div className="login p-3 bg-white shadow-lg flex flex-col gap-4 rounded-lg">
        <h1 className="title text-center text-3xl font-bold">Login</h1>
        <form action="" className="flex flex-col gap-3">
          <div className="row">
            <label>
              Username:
              <input
                className="mt-1"
                name="username"
                type="text"
                placeholder="Enter your username ..."
              />
            </label>
          </div>

          <div className="row">
            <label>
              Password:
              <input
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
      <Link to="/" className="text-blue-600 text-sm">
        Home
      </Link>
    </div>
  )
}

export default LoginPage
