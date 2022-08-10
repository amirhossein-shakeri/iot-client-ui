// import logo from './logo.svg';
// import './App.css';

import { Route, Routes } from "react-router-dom"
import HomePage from "./components/Home.page"
import LoginPage from "./components/Login.page"

export function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  )
}

export default App
