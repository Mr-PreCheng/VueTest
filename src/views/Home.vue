<template>
  <div class="home">
    <button @click="handlerClick('back')">返回上一页</button>
    <button @click="handlerClick('push')">跳转到组件</button>
    <button @click="handlerClick('replace')">替换</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  methods:{
    handlerClick (type){
      if(type === 'back'){
        this.$router.go(-1) //也可以this.$router.back(-1)
      }else if(type === 'push'){
         //this.$router.push('./parent')
         this.$router.push({
          //  name : 'parent', //还可以使用路由名字的方式   
          //  query:{   //添加路由后面的参数
          //    name : 'precheng',
          //    age : 15
          //  }
         // const name = 'hhh',
          name : 'argu', //用ES6的话  不用name属性，用path属性 `/agru/${name}`,要先定义name,只能这样写${name} 写，如果想要params ,path应该换为name
          params:{
            name : 'hhh'
          }
         })
      }else if(type === 'replace'){
        this.$router.replace({
             name : 'parent'
        })
      }
      
    }
  }
}
</script>
