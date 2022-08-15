import { Link } from "react-router-dom"

const linkClassNames =
  "flex flex-col justify-center items-center gap-1 bg-white text-indigo-400 hover:bg-indigo-400 hover:text-white p-1 rounded-md shadow-md flex-grow transition-all md:flex-row md:gap-4 md:py-2"
const iconSize = 5

export const Nav = () => {
  return (
    <nav
      className="Nav flex flex-row justify-center items-center gap-2 p-2"
      style={{ maxWidth: 800, margin: "0 auto -70px auto" }}
    >
      <Link to="/" className={linkClassNames}>
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-${iconSize} w-${iconSize}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg> */}
        {/* * if there is no h-5 w-5 class, then tailwind won't generate the classes that causes the icons to be fucked up! */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
        <span className="title text-sm">Home</span>
      </Link>
      <Link to="/login" className={linkClassNames}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-${iconSize} w-${iconSize}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
        <span className="title text-sm">Login</span>
      </Link>
      <Link to="/settings" className={linkClassNames}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-${iconSize} w-${iconSize}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
        </svg>
        <span className="title text-sm">Settings</span>
      </Link>
      <Link to="/signup" className={linkClassNames}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-${iconSize} w-${iconSize}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
        <span className="title text-sm">Signup</span>
      </Link>
    </nav>
  )
}

export default Nav
