import axios from 'axios'


const BASEAPI = 'http://localhost:3001' //pegar as informações de alguma api desejada


const Api = {
    //esqueleto de como fazer um post usando axios
    /* XXXX: async (XXXX: string, XXX: number, ...) => {
        const res = await axios.post(`${BASEAPI}/signin`, {
          XXXX,
          XXXXX
        })
        return res.data
      }, */
    teste: async (teste: string) => {
        const res = await axios.post(`${BASEAPI}/validateToken`, {
            teste
        })
        return res.data
    }
}


export default () => Api