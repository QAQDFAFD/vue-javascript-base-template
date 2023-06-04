// axios 的配置文件
import axios from 'axios'
const baseURL = import.meta.env.VITE_BASE_URL
// 配置 axios 的属性
// 请求时间不超过一分钟
axios.defaults.timeout = 60000
// 接口地址
axios.defaults.baseURL = baseURL
axios.defaults.responseType = 'json'
axios.defaults.headers.post['Content-Type'] = 'application/json'

export default axios
