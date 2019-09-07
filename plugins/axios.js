import {Message} from 'element-ui'

export default function({$axios,}){
    $axios.onError((res)=>{
        console.log(res)
        // 返回的res是一个错误的对象，Error对象下都有一个response的属性可以访问错误的信息
        // console.log(res.response, 123)

        // 解构出错误信息，和代码
        const {message, statusCode} = res.response.data;

        if(statusCode === 400){
            // Message = this.$message
            Message.error(message)
        }
    })
}