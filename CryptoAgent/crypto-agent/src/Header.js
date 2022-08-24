import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='header'>
        <div className='callback'>
        <span className='name'>Crypto Agent</span>
            <div className='second-div'>
                <div className='thrd'>
                    <Link to='/main' className='inf'>Go Tracking</Link>
                    <Link to='/about' className='inf'>About Us</Link>
                </div>
                <button className='btn'>Follow</button>
            </div>
        </div>

    </div>
  )
}
