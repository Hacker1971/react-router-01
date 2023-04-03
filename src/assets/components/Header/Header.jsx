import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Header extends Component {
  render() {
    return (
    <nav className='flex justify-center gap-10  text-4xl font-bold bg-slate-600 text-yellow-50 p-8'>
        <Link to = '/'>Home</Link>
        <Link to = '/friends'>Friends</Link>
        <Link to = '/about'>About</Link>
        <Link to = '/contact'>Contact</Link>
    </nav>
    )
  }
}

export default Header;
