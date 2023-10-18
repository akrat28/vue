<template>
    <div>
        <h1>这是child组件hhhhhhh</h1>
        父组件传递过来的参数:{{ msg }}
        <button @click="send">传值给父组件</button>
    </div>
  </template>

  <script>
  import { defineComponent,ref,onMounted} from 'vue';
  export default defineComponent({
    name:"dttall",

    props:{
    //接受父组件传递过来的参数
    //props 接受的数据也不能直接改
        msg:{
            //数据类型校验，只能传递字符串
            type:String,
            // 是否为必传 默认false
            // required:true
            // 设置默认值
            default:'默认值'
        }
    },
    setup(props,ctx){
        let childmsg = ref('我是子组件的数据')
        let childnum = ref(10)
        console.log(props)
        let send = () =>{
            // 通过ctx.emit分发事件
            // emit 第一个参数是事件名称(父组件@后面的) 第二个参数是传递的数据
            // 传递多个参数 方法一 列表
            ctx.emit('send',[childmsg.value,childnum.value])
        }
        // 在页面加载时就分发事件
        onMounted(()=>{
            // 方法二 对象式传递
            ctx.emit('send',{
                msg:childmsg.value,
                num:childnum.value,
            })
        })

        return{
            childmsg,
            send,
        }
    }
  })
</script>



  