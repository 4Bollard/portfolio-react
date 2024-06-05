// import { useState, useEffect } from "react" 
import { Link } from "react-router-dom"



// todo, link buttons for About, Contact, HomePage and Resume

export default function Header(){

  return (
    <header>
      <Link to="/">About</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/resume">Resume</Link>
      <Link to="/contact">Contact</Link>
    </header>
  )
}


