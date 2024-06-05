// import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import PortfolioPage from "./pages/Portfolio"
import ContactPage from "./pages/Contact"
import ResumePage from "./pages/Resume"
import Header from "./components/Header"
import Footer from "./components/Footer"
// import resume from "../src/components/"







function App() {

  return (
    <>
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/resume" element={<ResumePage />} />
          </Routes>        
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
