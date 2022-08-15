// import logo from './logo.svg';
// import './App.css';

import { Route, Routes } from "react-router-dom"
import HomePage from "./components/Home.page"
import LoginPage from "./components/Login.page"
import Nav from "./components/Nav"
import { ResetFactoryConfirmationPage } from "./components/ResetFactoryConfirmation.page"
import SettingsPage from "./components/Settings.page"

export function App() {
  return (
    <div className="App min-h-screen">
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/reset" element={<ResetFactoryConfirmationPage />} />
      </Routes>
    </div>
  )
}

export default App
