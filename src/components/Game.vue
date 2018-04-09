<template>
<div id="game">
  <table>
    <tr v-for="a in 3">
      <td v-for="b in 3" v-on:click="downChess(a,b)" v-bind:id="a+'_'+b"></td>
    </tr>
  </table>
  <div class="shadow" v-bind:class="{win:isWin}">
    <div class="inform" v-bind:class="{win:isWin}">
      <h2>{{winner}}</h2>
      <button v-on:click="again">再来一次</button>
    </div>
  </div>
</div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'Game',
  data (){
    return{
      nowPlayer: "Y",
      chessArr: [[,,],[,,],[,,]],
      isWin: false,
      winner: undefined
    }
  },
  methods: {
    downChess: function(a,b){
      //只有到玩家回合才能下棋，并且棋盘为空
      if(this.nowPlayer=="Y"&&!this.chessArr[a-1][b-1]){
        document.getElementById(a+"_"+b).innerHTML=this.nowPlayer;
        this.chessArr[a-1][b-1]=this.nowPlayer;
        let flag=this.Judge();
        if(flag==true){
          this.winner="You win";
          this.isWin=true;
          return 0;
        }
        this.nowPlayer="C";
        this.PcTurn();
      }
    },
    Judge: function(){
      //横向三列
      for(let i=0;i<3;i++){
          if(this.IsSame(this.chessArr[i][0],this.chessArr[i][1],this.chessArr[i][2])){
              return true;
          }  
      }
      //纵向三列
      for(let i=0;i<3;i++){
          if(this.IsSame(this.chessArr[0][i],this.chessArr[1][i],this.chessArr[2][i])){
              return true;
          }  
      }
      //对角
      if(this.IsSame(this.chessArr[0][0],this.chessArr[1][1],this.chessArr[2][2])){
          return true;
      }  
      if(this.IsSame(this.chessArr[0][2],this.chessArr[1][1],this.chessArr[2][0])){
          return true;
      } 
      return false;
    },
    IsSame: function(a,b,c){
        if(a==this.nowPlayer&&a==b&&b==c){
            return true;
        }
        return false;
    },
    PcTurn: function(){
      setTimeout(() => {
        let i=()=>{
            let n1=parseInt(3*Math.random());
            let n2=parseInt(3*Math.random());
            if(!this.chessArr[n1][n2]){
              document.getElementById((n1+1)+'_'+(n2+1)).innerHTML=this.nowPlayer;
              this.chessArr[n1][n2]=this.nowPlayer;
              return 0;
            }
            return i();
        };
        i();
        if(this.Judge()){
            this.winner="PC win";
            this.isWin=true;
        }
        this.nowPlayer="Y";
      },1000);
    },
    again: function(){
      this.isWin=false;
      this.chessArr=[[,,],[,,],[,,]];
      let td=document.getElementsByTagName('td');
      for(let i=0;i<td.length;i++){
        td[i].innerHTML="";
      }
    }
  }
}




</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table{
  margin:50px auto;
  border-collapse: collapse;
}
td{
  width: 100px;
  height: 100px;
  border: 2px solid #000000;
}
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
