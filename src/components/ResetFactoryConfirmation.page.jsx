import { Link } from "react-router-dom"

export const ResetFactoryConfirmationPage = () => {
  return (
    <div className="reset-container w-full h-full flex flex-col justify-center items-center p-2 mt-16">
      <div className="Settings p-3 bg-rose-100 text-rose-600 shadow-lg flex flex-col gap-4 rounded-lg">
        <h1 className="title text-center font-bold text-xl">Reset Factory</h1>
        <p>
          By resetting to factory settings, all changes will be lost and
          everything will be reset
        </p>
        <div className="flex flex-row items-center justify-center gap-2">
          <Link to="/" className="btn bg-green-100 text-green-900">
            Cancel
          </Link>
          <a
            href="/reset-confirm"
            to="/reset-confirm"
            className="btn bg-rose-400 text-white"
          >
            Confirm
          </a>
        </div>
      </div>
    </div>
  )
}
