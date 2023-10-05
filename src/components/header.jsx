import React from 'react'
import { Link } from 'react-router-dom'
import {HashLink} from "react-router-hash-link"
const Header = () => {
  return (
    <nav>
        <h1>Tech</h1>
    <main>
        <HashLink to="/#home">Home</HashLink>
        <HashLink to="/contact">contact</HashLink>
        <HashLink to="/#about">about</HashLink>
        <HashLink to="/#brands">brands</HashLink>
        <HashLink to="/services">services</HashLink>
    </main>
    </nav>
  )
}

export default Header
