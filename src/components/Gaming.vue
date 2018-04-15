<template>
<div id="game">
  <table>
    <tr
      v-for="a in 3"
      :key="`row_${a}`"
     >
     <td 
      v-for="b in 3" 
      @click="downChess(a,b)" 
      :id="`${a}_${b}`" 
      :key="`${a}_${b}`"
      ref="game_td"
     >
     </td>
    </tr>
  </table>
</div>
</template>

<script>

export default {
  name: 'Game',
  data() {
    return {
      nowPlayer: 'Y',
      chessArr: [['', '', ''], ['', '', ''], ['', '', '']],
    };
  },
  methods: {
    downChess(a, b) {
      //  只有到玩家回合，并且棋为空,才能下棋
      if (this.nowPlayer === 'Y' && !this.chessArr[a - 1][b - 1]) {
        document.getElementById(`${a}_${b}`).innerHTML = this.nowPlayer;
        this.chessArr[a - 1][b - 1] = this.nowPlayer;
        if (this.Judge() === true) {
          // 向父组件发送触发消息，从而触发父组件的自定义事件
          this.$emit('win', 'you win');
          return;
        }
        this.nowPlayer = 'C';
        this.PcTurn();
      }
    },
    Judge() {
      //  横向三列
      for (let i = 0; i < 3; i += 1) {
        if (this.IsSame(this.chessArr[i][0], this.chessArr[i][1], this.chessArr[i][2])) {
          return true;
        }
      }
      //  纵向三列
      for (let i = 0; i < 3; i += 1) {
        if (this.IsSame(this.chessArr[0][i], this.chessArr[1][i], this.chessArr[2][i])) {
          return true;
        }
      }
      //  对角
      if (this.IsSame(this.chessArr[0][0], this.chessArr[1][1], this.chessArr[2][2])) {
        return true;
      }
      if (this.IsSame(this.chessArr[0][2], this.chessArr[1][1], this.chessArr[2][0])) {
        return true;
      }
      return false;
    },
    IsSame(a, b, c) {
      if (a === this.nowPlayer && a === b && b === c) {
        return true;
      }
      return false;
    },
    PcTurn() {
      setTimeout(() => {
        const place = () => {
          const n1 = parseInt(3 * Math.random(), 10);
          const n2 = parseInt(3 * Math.random(), 10);
          if (this.chessArr[n1][n2] === '') {
            document.getElementById(`${n1 + 1}_${n2 + 1}`).innerHTML = this.nowPlayer;
            this.chessArr[n1][n2] = this.nowPlayer;
            return 0;
          }
          return place();
        };
        place();
        if (this.Judge()) {
          this.$emit('win', 'PC win');
        }
        this.nowPlayer = 'Y';
      }, 1000);
    },
    again() {
      this.chessArr = [['', '', ''], ['', '', ''], ['', '', '']];
      const td = this.$refs.game_td;
      for (let i = 0; i < td.length; i += 1) {
        td[i].innerHTML = '';
      }
    },
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
table{
  margin:50px auto;
  border-collapse: collapse;
}
td{
  width: 100px;
  height: 100px;
  border: 2px solid #000000;
}

</style>
