<template>
    <div>
        <button @click="start">开始任务</button>
    </div>
</template>

<script>
import { defineComponent ,ref, toValue,onMounted} from 'vue';
import { useRouter } from 'vue-router';
import { toRaw } from 'vue';

export default defineComponent({
  name:"Start",
  setup(){
    let router = useRouter()
    let name = ref('bububububu')
    let num = ref(10)
    const obj = ref({
        aaa: 'value1',
        bbb: 'value2'
    });
    // console.log(obj.value)
    onMounted(()=>{
        //组件加载的过程
        //数据dom...
        //发请求
        //数据初始化的操作  接受路由传递的参数
        console.log("onMounted")
    })

    let start = () =>{
        // push 如果传的是对象的形式 就可以传递参数
        // push 可以用path 和name 路由名
        // query 传参 path name都可以
        // params 只能用name
        router.push({
            path:"/HomeView",
            // name: 'HomeView',
            // query对象 传参
            query:{
                name: name.value,
                num: num.value,
                // 如果是复杂类型 最好先转成字符串 用的时候再转回来
                // obj: JSON.stringify(obj.value)
                obj: obj.value
                
            }
        })
    }
    
    return{
      start
    }
  }
})
</script>