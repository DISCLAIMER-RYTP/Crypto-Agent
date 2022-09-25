import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import Info from './Info'

export default function Header() {
  return (
    <div className='header' id='hd2'>
        <div className='callback'>
        <span className='name'>Crypto Agent</span>
            <div className='second-div'>
                <div className='thrd'>
                    <span className='crpt'>BTC: 22.03</span>
                    <span className='crpt'>ETH: 05.14</span>
                    <span className='crpt'>...</span>
                </div>
            </div>
        </div>

    </div>
  )
}