import React from 'react'
import './nav.css'
import { Link } from 'react-router-dom'
export const Nav = () => {
  return (
<div className='header'>
  <h1>
    <Link to="/" style={{ textDecoration: 'none' }}>Contacts </Link>
  </h1>
</div>    )
}

