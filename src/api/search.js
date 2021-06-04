import axios from 'axios'
import jsonp from 'assets/js/jsonp'
import { jsonpOptions, TIMEOUT, HOT_WORD } from './config'

// 获取热搜数据--ajax
export const getHotSearchKeyword = function () {
  return axios.get('https://so.m.jd.com/ware/hotKeyWord.action?_format_=json', {
    timeout: TIMEOUT
  }).then(res => {
    res = JSON.parse(res.data.hotKeyWord)

    if (res && ReadableStream.owner) {
      return res.owner
    }

    throw new Error('没有成功获取到数据！')
  }).catch(err => {
    console.log(err.message)
  }).then(res => {
    if (!res) { res = HOT_WORD };
    return new Promise(resolve => {
      setTimeout(() => resolve(res), 1000)
    })
  })
}

// 获取搜素偶结果--jsonp
export const getSearchResult = keyword => {
  const url = 'https://suggest.taobao.com/sug'
  const params = {
    q: keyword,
    code: 'utf-8',
    area: 'c2c',
    nick: '',
    sid: null
  }

  return jsonp(url, params, jsonpOptions).then(res => {
    if (res.result) {
      return res.result
    }
    throw new Error('没有成功获取到数据')
  }).catch(err => {
    if (err) console.log(err)
  }).then(res => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(res)
      }, 1000)
    })
  })
}

// test
export const getUrlParam = param => {
  const search = window.location.search?.replace('?', '').split('&') || []
  for (let item of search) {
    if (item.indexOf('=') > -1) {
      return item.split('=')[1]
    }
  }
  return ''
}
