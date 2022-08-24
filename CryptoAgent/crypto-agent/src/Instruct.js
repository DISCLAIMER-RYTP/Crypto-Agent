import React from 'react'
import './Instruct.css'
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';

export default function Instruct() {
  return (
    <div className='main'>
        <div className='scnd'>
        <div>
            <p>Analizing</p>
            <QueryStatsIcon fontSize='large'/>
        </div>
        <div>
            <p>Observe</p>
            <RemoveRedEyeIcon fontSize='large'/>
          </div>
          <div>
                <p>Trading</p>
                <CurrencyBitcoinIcon fontSize='large'/>
            </div>
        </div>
    </div>
  )
}
