<template>
  <div 
    class="shadow" 
    v-bind:class="{win:isWin}" 
  >
    <div 
      class="inform" 
      v-bind:class="{win:isWin}"
    >
      <h2>{{winner}}</h2>
      <button v-on:click="again">再来一次</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['isWin', 'winner'],
  methods: {
    again() {
      // 发送消息触发父组件的自定义事件
      this.$emit('again');
    },
  },
};
</script>


<style>
.shadow{
  position: absolute;
  left:0;
  top:0;
  width: 100%;
  height: 100%;
  background: rgba(114, 114, 114, 0.5);
  display: none;
  z-index: 10;
}

.inform{
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 200px;
  height: 100px;
  border:2px solid #000000;
  border-radius: 10px;
  background: #ffffff;
}
.inform h2{
  margin: 0;
  padding: 0;
  line-height: 50px;
}
.inform button{
  width: 100px;
  height: 30px;
}
.win{
  display: block;
}
</style>
