import axios from 'axios'

const api = axios.create(
    {
        baseURL: 'https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,BRL-GBP,BRL-INR,BRL-JPY,BRL-MXN,BRL-CAD'
    }
)

export default api
