import React from 'react'
import {useState} from 'react'
import './Main.css'
import Header2 from './Header2.js'
import BarChart from './Diag1'
import {UserData} from './Data'

export default function Main() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
      label: "BTC",
      data: UserData.map((data) => data.userGain),
      backgroundColor: [
        "rgb(125, 125, 125)"
      ],
      borderColor: "black",
      borderWidth: 2,
    },
    ],
  });
  return (
    <div className='mm'>
      <Header2/>
      <div>
        <div style={{width: 600}}>
        <BarChart chartData={userData}/>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

