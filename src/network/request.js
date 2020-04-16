import axios from 'axios'

export function request(config){
//    config 包括url  succ fail 等
//   1. 创建实例
    const  instance=axios.create({
           baseURL:"http://123.207.32.32:8000",
           timeout:5000
    })
//  拦截器
//    1.1请求拦截器
    instance.interceptors.request.use(config=>{
        //使用拦截器后需要返回config
        return config
    },err=>{

    })
//    1.2响应拦截
    instance.interceptors.response.use(res=>{
         return res.data

    },err=>{

    })
    // 2.发送真正的网络请求  返回的是一个promise，可以在调用的地方使用.then 方法
    return  instance(config)

}