// 对网络请求进行一个封装传递
import{
  baseURL
}from './config.js'

export default function(options){
  return new Promise((resolve, reject)=>{
    wx.request({
      url: baseURL+options.url,
      method: options.method || 'get',
      data: options.data || {},
      success: resolve,
      fail: reject
    })
  })
}