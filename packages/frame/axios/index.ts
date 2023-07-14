import axios from 'axios'
import { ElMessage } from 'element-plus'

export const request = axios.create({
  baseURL: '/',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  }
})

request.interceptors.request.use(
  (request) => {
    return request
  },
  (error) => {
    console.log(error)
    return Promise.reject(error)
  }
)

request.interceptors.response.use(
  (response) => {
    // 解析服务返回的数据，如 { code: 0, data: [] }、{ code: 1, message: '' }
    // const { code, message, data } = response.data
    // if (code) {
    //   ElMessage.error(message)
    //   return Promise.reject(response.data)
    // }
    return response.data
  },
  (error) => {
    ElMessage.error(error?.message)
    return Promise.reject(error)
  }
)