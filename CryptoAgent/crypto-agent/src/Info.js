import React, { Component } from 'react'
import './Header.css'
import './Main.css'
import Loader from './Loader'

export default class Info extends Component {

    constructor(props){
        super(props)
    
        this.state = {
          error: null,
          isLoader: false,
          items: [],
        }
    }

    componentDidMount(){
        fetch(`https://data.messari.io/api/v1/assets/bitcoin/metrics/price/time-series?start=2020-01-01&end=2020-02-01&interval=1d`)
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
    render() {
        const {error, isLoader, items} = this.state
        if(error){
          return <p>Error: {error.massage}</p>
        }
        else if(!isLoader){
    return <Loader/>
        }
        else{
        return(
          <div>
              {items.values.map(item => (
                <div className=''>
                    <p className='dt'>{Date(item[0])}</p>
                    <p>Avarage price: {item[1]}</p>
                    <p>Highest price: {item[2]}</p>
                    <p>Lowest price: {item[3]}</p>
                    <p>Total trading volume: {item[5]}</p>
                    <hr/>
                 </div>
        ))}
          </div> 
        )
    
        }
      }
      
    }