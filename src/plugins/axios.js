import axios from 'axios'
import Vue from 'vue'

const axiosConfig = {
    baseURL: 'https://jsonplaceholder.typicode.com'
}

const customAxios = axios.create(axiosConfig)
Vue.prototype.$axios = customAxios

export default customAxios


