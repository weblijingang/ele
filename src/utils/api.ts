import axios from 'axios'
import config from './config'
// 取消重复请求
let pendding: Array<{
    url: string,
    cancel: Function
}> = []
const CancelToken = axios.CancelToken
const removePending = (config:any) => {
    for (let p in pendding) {
        let item: any = p
        let list: any = pendding[p]
        if (list.url === `${config.url}&request_type=${config.method}`) {
            list.cancel('操作频繁')
            pendding.splice(item, 1)
        }
    }
}
const service = axios.create(config)
service.interceptors.request.use(
    config => {
        removePending(config)
        config.cancelToken = new CancelToken(c => {
            pendding.push({ url: `${config.url}&request_type=${config.method}`, cancel: c })
        })
        console.log(pendding)
        return config
    },
    error => Promise.reject(error)
)
// 返回状态判断(添加响应拦截器)
service.interceptors.response.use(
    res => {
        removePending(res.config)
        return res
    },
    error => Promise.reject(error)
)
export default service
