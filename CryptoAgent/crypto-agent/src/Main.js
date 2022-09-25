import React, { useEffect } from 'react';
import './Main.css';
import Header2 from './Header2.js';
import List from './ListCrpt';
import Diag from './Diag';
import Info from './Info';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState } from 'react';
import Loader from './Loader';

export default function Main() {
  return (
    <div className='mm'>
      <Header2/>
      <div className='dvL'><List/></div>
      <div className='dvD'><Diag/></div>
      <div className='dvI'><Info/></div>
      </div>
   )
}

