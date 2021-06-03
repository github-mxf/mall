import axios from 'axios'
import { SUCCESS_CODE, TIMEOUT, HOME_RECOMMEND_PAGE_SIZE, jsonpOptions} from './config'
import { resolve } from 'upath'
import jsonp from 'assets/js/jsonp'

export const getSliders = () => {
  return axios.get('http://www.imooc.com/api/home/slider', {
    timeout: TIMEOUT
  }).then(res => {
    // console.log(res);
    if (res.data.code === SUCCESS_CODE) {
      let sliders = res.data.slider
      const slider = [sliders[Math.floor(Math.random() * sliders.length)]]
      sliders = sliders.filter(() => Math.random() >= 0.5)
      if (sliders.length === 0) {
        sliders = slider
      }
      return sliders
    } else {
      throw new Error('no data!')
    }
  }).catch(err => {
    console.log(err)
    return [
      {
        linkUrl: 'https://www.imooc.com',
        picUrl: require('assets/img/404.png')
      }
    ]
  }).then(res => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(res)
      }, 1000)
    }
    )
  }
  )
}

export const getHomeRecommend = (page = 1, psize = 20) => {
  const url = 'https://ju.taobao.com/json/tg/ajaxGetItemsV2.json'
  const params = {
    page,
    psize,
    type: 0,
    frontCatId: ''
  }
  // return jsonp(url, params, jsonpOptions).then(res => {
  //   console.log(res);
  // });
  return jsonp(url, params, jsonpOptions).then(res => {
    if (res.code === '200') {
      return res
    }

    throw new Error('没有成功获取到数据！')
  }).catch(err => {
    if (err) {
      console.log(err)
    }
  }).then(res => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(res)
      }, 1000)
    })
  })
}
