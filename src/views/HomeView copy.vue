<template>
  <div>
    <!-- <nav-head></nav-head>
    <nav-main></nav-main>
    <nav-footer></nav-footer>
    {{ list }} -->
      <!-- {{ num1 }}
      {{ num2 }}
      {{ addnum }}-->
      <button @click="goto">跳转路由</button>
      {{ name }}
      {{ num }}
      {{ obj }}
  </div> 
  <!-- <div>
    <button @click="add">add</button>
  </div> -->
</template>

<script>
import NavHead from '@/components/navHeader/NavHeader.vue'
import NavMain from '@/components/navMain/NavMain.vue'
import NavFooter from '@/components/navFooter/NavFooter.vue'
// computed 计算属性
import { defineComponent ,computed,ref,onMounted,onBeforeMount} from 'vue'
// useStore 是 Vue 3 中的一个函数，用于访问 Vuex 存储实例
// use 开头的都是函数
import { useStore } from 'vuex'
// 路由 跳转 接受
import {useRouter, useRoute} from 'vue-router'
export default defineComponent({
  name:'hi',
  components:{
    NavHead,
    NavMain,
    NavFooter
  },
  setup(){
    // router 是全局路由对象
    let router = useRouter()
    //route 是当前路由对象
    let route = useRoute()

    // query 传递过来的参数都是字符类型
    // console.log(route.query)
    let num = ref(null)
    let name = ref('')
    let obj = ref({})

    onMounted(()=>{
      num.value = route.query.num*1;
      name.value = route.query.name;

      obj.value = route.query.obj
      // obj.value = JSON.parse(route.query.obj)
      // console.log("结果:", JSON.parse(obj.value));
      // console.log(obj.value)
    })
    // console.log(router)
    let goto = () =>{
      // 跳转路由
      // push 函数里面可以传入跳转路径
      // back 回退到上一页
      // forward 去到下一页
      // go(整数) 整数代表前进 负数代表后退
      router.push({
        path:"/about"
      })
    }

    // useStore 是 Vue 3 中的一个函数，用于访问 Vuex 存储实例
    // let store = useStore()
    // let list = computed(()=>{
    //   return store.state.list
    // })


    // let num1 = ref(10)
    // let num2 = ref(20)
    // let addnum = computed(()=>{
    //   //必须返回一个值
    //   //逻辑代码
    //   return num1.value + num2.value
    // })
    // let add = () =>{
    //   num1.value++
    //   num2.value++
    // }
    return{
      // num1,
      // num2,
      // addnum,
      // add
      // list
      goto,
      name,
      num,
      obj
    }
  }
})
</script>

<style scoped lang="scss"> 

</style>