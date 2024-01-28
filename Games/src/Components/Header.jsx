import React from 'react'
import logo from './../assets/Images/logo.png'
function Header() {
  return (
    <div>
      <img src={logo} width={60}height={60} />
      <div>
        <input type = 'text'/>
      </div>
    </div>
  )
}

export default Header
