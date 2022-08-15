import { useReducer, useState } from "react"
import { Link } from "react-router-dom"
import api from "../api"

export const stateReducer = (state, action) => ({ ...state, ...action })

export const SettingsPage = () => {
  const initialState = {
    ssid: "", // load from server? idk
    wifiPassword: "", // load from server? idk
    networkType: "api",
    ipMode: "dynamic",
    staticIp: "192.168.1.4",
  }
  const [formState, setFormState] = useReducer(stateReducer, initialState)

  const stateUpdater = key => e =>
    setFormState({ [key]: e.currentTarget.value })

  const handleSubmit = e => {
    e.preventDefault()
    api
      .updateSettings(formState)
      .then(res => {
        console.log("Response: ", res)
      })
      .catch(err => {
        console.log("Error: ", err, err.response)
        alert("Failed to save settings: " + err.message)
      })
  }

  return (
    <div className="settings-container w-full h-full flex flex-col justify-center items-center p-2 gap-2 mt-16">
      <div className="Settings p-3 bg-white shadow-lg flex flex-col gap-4 rounded-lg">
        <h1 className="title text-center text-3xl font-bold">Settings</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div className="row">
            <label>
              WiFi SSID:
              <input
                className="mt-1"
                name="ssid"
                type="text"
                placeholder="Name of the WiFi Network ..."
                onChange={stateUpdater("ssid")}
                value={formState.ssid}
              />
            </label>
          </div>

          <div className="row">
            <label>
              WiFi Password:
              <input
                className="mt-1"
                type="password"
                name="wifiPassword"
                placeholder="Enter your WiFi password ..."
                onChange={stateUpdater("wifiPassword")}
                value={formState.wifiPassword}
              />
            </label>
          </div>

          <div className="row">
            <label>
              Network Type:
              <select
                name="networkType"
                className="mt-1"
                onChange={stateUpdater("networkType")}
                value={formState.networkType}
              >
                <option value="api">API</option>
                <option value="local">Local</option>
                <option value="api+local">API & Local</option>
              </select>
            </label>
          </div>

          <div className="row">
            <label>
              IP Mode:
              <select
                name="ipMode"
                className="mt-1"
                onChange={stateUpdater("ipMode")}
                value={formState.ipMode}
              >
                <option value="static">Static</option>
                <option value="dynamic">Dynamic</option>
              </select>
            </label>
          </div>

          {formState.ipMode === "static" && (
            <div className="row">
              <label>
                Static IP:
                <input
                  className="mt-1 font-mono text-emerald-500"
                  name="staticIp"
                  type="text"
                  placeholder="Enter your WiFi password ..."
                  onChange={stateUpdater("staticIp")}
                  value={formState.staticIp}
                />
              </label>
            </div>
          )}

          <div className="row flex justify-end gap-2">
            <Link to="/" className="btn bg-slate-300">
              Cancel
            </Link>
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </div>
        </form>

        <h2 className="title text-center text-xl font-bold mt-8 text-rose-400">
          Danger Zone
        </h2>
        <div className="row">
          <Link
            to="/reset"
            className="btn flex justify-center items-center w-full bg-rose-500 text-white gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                clipRule="evenodd"
              />
            </svg>
            Reset to Factory Settings
          </Link>
        </div>
      </div>
      {/* <Link to="/" className="text-blue-600 text-sm">
        Home
      </Link> */}
    </div>
  )
}

export default SettingsPage
