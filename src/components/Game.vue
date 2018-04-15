<template>
  <div id='gamevue'>
    <gaming 
    @win="winConfirm"
    ref="gaming"
    ></gaming>
    <result
     :isWin="isWin"
     :winner="winner"
     @again="again"
     ></result>
  </div>
</template>

<script>
import Gaming from './Gaming.vue';
import Result from './Result.vue';

export default {
  name: 'Game',
  components: {
    Gaming,
    Result,
  },
  data() {
    return {
      isWin: false,
      winner: 'you win',
    };
  },
  methods: {
    //  监听到子组件事件被触发，函数被调用
    winConfirm(data) {
      this.winner = data;
      this.isWin = true;
    },
    again() {
      this.isWin = false;
      this.$refs.gaming.again();
    },
  },
};
</script>

<style>

</style>

