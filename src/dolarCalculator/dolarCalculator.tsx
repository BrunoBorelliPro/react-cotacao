import React from 'react'
import api from '../axios/api'
import {useState, useEffect} from 'react'
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

function DolarCalculator(){

    const [moedas, setMoedas] = useState<string[]>([])
    const [moedasData, setMoedasData] = useState<{[key:string]:Cotacao}>()
    const [moedaSelecionada, setMoedaSelecionada] = useState<Cotacao>()
    const [valorEstrangeiro, setValorEstrangeiro] = useState<string>()

    useEffect(()=>{
        getMoedas().then(
            (response)=>{
                const [moedas, moedasData] = response
                setMoedas(moedas)
                setMoedaSelecionada(moedasData![moedas[0]])
                setMoedasData(moedasData)
            }
        )
    },[])

    return(
        <div>
            <select name="moeda" id="moeda" onChange={(event)=>{
                const moeda_selecionda = event.target.value
                setMoedaSelecionada(moedasData![moeda_selecionda])
            }}>
            {moedas.map((moeda)=>{
                return(<option value={moeda} key={moeda}>{moeda}</option>)
            })}
            </select>
            <input type="number" onChange={
                (event)=>{
                    const valor = event.target.value
                    setValorEstrangeiro(valor)
                }
            }></input>
        <p>Valor em real:{
            moedaSelecionada && valorEstrangeiro ? formatNumber(2,Number(valorEstrangeiro)*Number(moedaSelecionada?.high)) : ""
            
        
        }</p>
        </div>
    )
}

async function getMoedas(){
    const response = await api.get('')
    var moedas:string[] = []
    for (const moeda in response.data) {
        moedas.push(moeda)
    }
    const moedasData = response.data
    return [moedas, moedasData]
}



export default DolarCalculator