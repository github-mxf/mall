import axios from 'axios'
import { SUCCESS_CODE, TIMEOUT } from './config'

const CancelToken = axios.CancelToken
let cancel

export const getCategoryContent = (id) => {
  cancel && cancel('取消了前一次的请求！')
  cancel = null
  return axios.get(`http://www.imooc.com/api/category/content/${id}`, {
    timeout: TIMEOUT,
    cancelToken: new CancelToken(function executor (c) {
      cancel = c
    })
  }).then(res => {
    if (res.data.code === SUCCESS_CODE) {
      console.log('ok')
      return res.data.content
    }
    throw new Error('没有成功获取到数据')
  }).catch(err => {
    if (axios.isCancel(err)) { // 取消前一次请求
      console.log(err)
    } else {
      console.log(err)
    }
  })
}
