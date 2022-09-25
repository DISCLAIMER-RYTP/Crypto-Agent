import { useState } from "react";
import React from 'react'
import LineChart from "./LineChart";
import { UserData } from "./Datas/Data";
import { UserData2 } from "./Datas/Data2";
import { UserData3 } from "./Datas/Data3";
import { UserData4 } from "./Datas/Data4";
import './Header.css'

export default function Diag() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: 'Average Price',
        data: UserData.map((data) => data.userGain),
        borderColor: "red",
        backgroundColor: "red",
      },
      {
        label: 'Sell',
        data: UserData2.map((data) => data.userGain),
        borderColor: "green",
        backgroundColor: "green",
      },
      {
        label: 'Min Price',
        data: UserData3.map((data) => data.userGain),
        borderColor: "blue",
        backgroundColor: "blue",
      },
      {
        label: 'Max Price',
        data: UserData4.map((data) => data.userGain),
        borderColor: "orange",
        backgroundColor: "orange",
      }
    ]
  });
return (
<div className="diag">
    <LineChart chartData={userData} />
    <LineChart chartData={userData} />
  </div>
)
}
