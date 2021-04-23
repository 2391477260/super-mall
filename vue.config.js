//别名配置
// 与公共的配置合并
module.exports ={
    configureWebpack:{
        resolve :{
            alias:{
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views' : '@/views'
            }
        }
    }
}
