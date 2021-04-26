import {request} from "./request";
//对首页所有请求进行封装
export function getHomeMultidata() {
  return request({
    url:'/home/multidata'
  })
}

export function getHomeGoods(type,page) {
  return request({
    url:'/home/data',
    params:{
      type,
      page
  }
  })

}
