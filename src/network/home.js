import {request} from "./request";
//对首页所有请求进行封装
export function getHomeMultidata() {
  return request({
    url:'/home/multidata'
  })
}

