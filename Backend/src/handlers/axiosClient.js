import axios from 'axios'
import { config } from '../config.js'

const axiosClient = axios.create({
  baseURL: 'https://echo-serv.tbxnet.com/v1/secret',
  headers: {
    authorization: config.api.key
  }
})

export default axiosClient
