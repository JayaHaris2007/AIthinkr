import React from 'react'

import logo from '../assets/logo.png'

const Nav = () => {
  return (
    <div>
        <nav class="navbar bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                <img src={logo} alt="Logo" width="40" height="40" class="d-inline-block align-text-top"/>
                AIthinkr
                </a>
                <a class="btn btn-primary" role="button" aria-disabled="true" href='/'>Login</a>
            </div>
        </nav>
        <br/>
    </div>
  )
}

export default Nav