<template>
  <div>
    <nav-head @add="add"></nav-head>
    <nav-main :list="list" @del="del"></nav-main>
    <nav-footer :list="list" @clear="clear"></nav-footer>
  </div> 
</template>

<script>
import NavHead from '@/components/navHeader/NavHeader.vue'
import NavMain from '@/components/navMain/NavMain.vue'
import NavFooter from '@/components/navFooter/NavFooter.vue'
import { computed, defineComponent,ref} from 'vue'
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
    let value = ref('')

    //添加任务
    let add = (val) =>{
      value.value = val

      //判断是否重复
      let flag = true
      // console.log(list.value)
      list.value.map(item =>{
        if(item.title === value.value){
          flag = false
          alert('任务已存在')
        }
      })
      //store.commit()方法用于触发Vuex存储中的mutations
      // 第一个填方法名 第二个填对应的数据
      if(flag){
        store.commit('addTodo',{
        title:value.value,
        components:false
      })
      }
    }

    //删除任务
    let del = (val) =>{
      store.commit('delTodo',val)
      console.log(val)
    }

    //清除已完成
    let clear = (val) =>{
      store.commit('clear',val)
    }
    return{
      add,
      value,
      list,
      del,
      clear,
    }
  }
})
</script>

<style scoped lang="scss"> 

</style>