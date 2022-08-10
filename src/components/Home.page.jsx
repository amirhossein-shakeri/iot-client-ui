import { Link } from "react-router-dom"

export const HomePage = () => {
  return (
    <div className="Home h-screen flex flex-col justify-center items-center p-2 gap-2">
      <div className="links bg-white shadow-lg flex flex-col gap-4 rounded-lg p-4">
        <h1 className="text-2xl text-center font-bold">Welcome!</h1>
        <Link
          className="text-blue-500 underline text-center rounded-md hover:bg-indigo-400 hover:text-white transition py-1 px-2"
          to="/login"
        >
          Login
        </Link>
        <Link
          className="text-blue-500 underline text-center rounded-md hover:bg-indigo-400 hover:text-white transition py-1 px-2"
          to="/signup"
        >
          Signup
        </Link>
        <Link
          className="text-blue-500 underline text-center rounded-md hover:bg-indigo-400 hover:text-white transition py-1 px-2"
          to="/settings"
        >
          Settings
        </Link>
      </div>
    </div>
  )
}

export default HomePage
