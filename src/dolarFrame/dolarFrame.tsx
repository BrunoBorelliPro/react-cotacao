import { format } from 'path';
import React, {Component} from 'react'
import {useState, useEffect} from 'react'
import './dolarFrame.css'
import api from '../axios/api'
import formatNumber from '../service/formatNumbers'

interface Cotacao{
    code: string,
    codein: string,
    name: string,
    high: string,
    low: string,
    varBid: string,
    pctChange: string,
    bid: string,
    ask: string,
    timestamp: string,
    create_date: string,
}


/*class coinFrame extends React.Component{
    const [valor:number,setValor:Function] = useState<Cotacao|null>()


    render(){
        return <b></b>
    }
}*/

function DolarFrame(): JSX.Element {

    const [valor,setValor] = useState<Cotacao|null>()

    useEffect(() => {
        getCotacao().then((response)=>{
            setValor(response.data.USD)
            console.log(response.data)
        }).catch(()=>{
            console.log("Deu errado")
        })
      },[]);



    return (
        <div className="DolarFrame">
            <h2>{valor?.name}: ${formatNumber(2, valor?.ask || 0)}</h2>
        </div>
    )
}


async function getCotacao() {
    const response = await api.get('USD-BRL')
    return response
}
export default DolarFrame;

