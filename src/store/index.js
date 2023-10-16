//createStore 创建状态管理
import { createStore } from 'vuex'

export default createStore({
  //定义所需要的状态
  state: {
    list:[
      {
        title:'吃陈石磊',
        components:false
      },
      {
          title:'吃蒋前程',
          components:false
      },
      {
          title:'吃吃吃',
          components:true
      },
    ]
  },
  getters: {

  },
  //同步修改state 都是方法
  //第一个参数state 第二个参数是需要修改的值
  mutations: {
   //调用该方法从而修改state中name的值
    addTodo(state,pay){
      //添加任务
      state.list.push(pay)
    },
    //删除任务 数组有个方法 splice(下标,个数)
    delTodo(state,pay){
      state.list.splice(pay,1)
    },
    //清除已完成
    clear(state,pay){
      //把过滤后的数组传过来
      state.list = pay
    }
    
  },
  //异步提交mutations
  //第一个参数state 第二个参数是修改的值
  actions: {
      //commit是提交mutations 实际就是调用mutations方法
      //steName 是mutations中定义的方法
    },
  //模块化
  modules: {

  }
})
