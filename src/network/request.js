import axios from "axios";
export function request(config) {
  //发送网络请求的配置
    const instance=axios.create({
      baseURL:'http://123.207.32.32:8000',
      timeout:5000
    });
    instance.interceptors.request.use(config=>{

    })
    //发送网络请求
    //返回的就是个promise
    return instance(config)
}
