import qs from 'qs'
import { AxiosResponse, AxiosRequestConfig } from 'axios'
const axiosConfig: AxiosRequestConfig = {
    baseURL: 'http://172.20.4.171:9000',
    transformResponse: [(data: AxiosResponse) => data],
    paramsSerializer: (parmas: any) => qs.stringify(parmas),
    timeout: 30000,
    // 跨域是否带Token
    // withCredentials: true,
    responseType: 'json',
    // xsrf设置
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    // 最大响应数据大小
    maxContentLength: 2000,
    // 自定义状态码范围
    validateStatus: (status: number) => status >= 200 && status < 300
}
export default axiosConfig
