<template>
  <div>
    <nav-head></nav-head>
    <nav-main></nav-main>
    <nav-footer></nav-footer>
    {{ list }}
      <!-- {{ num1 }}
      {{ num2 }}
      {{ addnum }}-->
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
import { defineComponent ,computed,ref} from 'vue'
import { useStore } from 'vuex'
export default defineComponent({
  name:'hi',
  components:{
    NavHead,
    NavMain,
    NavFooter
  },
  setup(){
    let store = useStore()
    let list = computed(()=>{
      return store.state.list
    })
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
      list
    }
  }
})
</script>

<style scoped lang="scss"> 

</style>