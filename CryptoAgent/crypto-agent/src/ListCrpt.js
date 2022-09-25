import React, { Component } from 'react'
import './Main.css'
import Info from './Info'

export default class ListCrpt extends Component {

    constructor(props){
        super(props)
    
        this.state = {
          error: null,
          isLoader: false,
          items: [],
          sl: "bitcoin"
        }
    }

componentDidMount(){
    fetch('https://data.messari.io/api/v1/assets?fields=id,slug,symbol,metrics/market_data/price_usd')
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoader: true,
              items: result.data
            });
          },
          (error) => {
            this.setState({
              isLoader: true,
              error
            })
          }
        )
}
    
render(){
    const {error, isLoader, items} = this.state
    if(error){
      return <p>Error: {error.massage}</p>
    }
    else if(!isLoader){
return <p>Loading...</p>
    }
    else{
    return(
      <div>
        {items.map(item => (
          <div className='listDv'>
          <button className='btnCr'>{item.symbol}: {item.slug}</button>
          </div>
        ))}
      </div> 
    )
    }
}
}

function Prp(slu){
  this.sate.sl=slu;
}