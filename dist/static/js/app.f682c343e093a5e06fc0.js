webpackJsonp([1],{NHnr:function(n,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=s("MVMM"),r={name:"Game",data:function(){return{nowPlayer:"Y",chessArr:[[,,],[,,],[,,]],isWin:!1,winner:void 0}},methods:{downChess:function(n,e){if("Y"==this.nowPlayer&&!this.chessArr[n-1][e-1]){if(document.getElementById(n+"_"+e).innerHTML=this.nowPlayer,this.chessArr[n-1][e-1]=this.nowPlayer,1==this.Judge())return this.winner="You win",this.isWin=!0,0;this.nowPlayer="C",this.PcTurn()}},Judge:function(){for(var n=0;n<3;n++)if(this.IsSame(this.chessArr[n][0],this.chessArr[n][1],this.chessArr[n][2]))return!0;for(var e=0;e<3;e++)if(this.IsSame(this.chessArr[0][e],this.chessArr[1][e],this.chessArr[2][e]))return!0;return!!this.IsSame(this.chessArr[0][0],this.chessArr[1][1],this.chessArr[2][2])||!!this.IsSame(this.chessArr[0][2],this.chessArr[1][1],this.chessArr[2][0])},IsSame:function(n,e,s){return n==this.nowPlayer&&n==e&&e==s},PcTurn:function(){var n=this;setTimeout(function(){!function e(){var s=parseInt(3*Math.random()),t=parseInt(3*Math.random());return n.chessArr[s][t]?e():(document.getElementById(s+1+"_"+(t+1)).innerHTML=n.nowPlayer,n.chessArr[s][t]=n.nowPlayer,0)}(),n.Judge()&&(n.winner="PC win",n.isWin=!0),n.nowPlayer="Y"},1e3)},again:function(){this.isWin=!1,this.chessArr=[[,,],[,,],[,,]];for(var n=document.getElementsByTagName("td"),e=0;e<n.length;e++)n[e].innerHTML=""}}},i={render:function(){var n=this,e=n.$createElement,s=n._self._c||e;return s("div",{attrs:{id:"game"}},[s("table",n._l(3,function(e){return s("tr",n._l(3,function(t){return s("td",{attrs:{id:e+"_"+t},on:{click:function(s){n.downChess(e,t)}}})}))})),n._v(" "),s("div",{staticClass:"shadow",class:{win:n.isWin}},[s("div",{staticClass:"inform",class:{win:n.isWin}},[s("h2",[n._v(n._s(n.winner))]),n._v(" "),s("button",{on:{click:n.again}},[n._v("再来一次")])])])])},staticRenderFns:[]};var a=s("Z0/y")(r,i,!1,function(n){s("vDiP")},"data-v-97098f00",null).exports,c={name:"App",components:{Game:a}},h={render:function(){var n=this.$createElement,e=this._self._c||n;return e("div",{attrs:{id:"app"}},[e("h2",[this._v("三子棋")]),this._v(" "),e("game")],1)},staticRenderFns:[]};var o=s("Z0/y")(c,h,!1,function(n){s("i/Jj")},null,null).exports,u=s("zO6J");t.a.use(u.a);var l=new u.a({routes:[{path:"/",name:"Game",component:a}]});t.a.config.productionTip=!1,new t.a({el:"#app",router:l,components:{App:o},template:"<App/>"})},"i/Jj":function(n,e){},vDiP:function(n,e){}},["NHnr"]);
//# sourceMappingURL=app.f682c343e093a5e06fc0.js.map