var music_list = [
  { id:0, text:"距離 - 陳綺貞" },
  { id:1, text:"彼個所在 - 魏如萱" },
  { id:2, text:"Don't cry Don't cry - 魏如萱" },
  { id:3, text:"暗流 - 拍謝少年" },
  { id:4, text:"The 1 - Taylor Swift" },
  { id:5, text:"Cardigan - Taylor Swift" },
  { id:6, text:"Edge Of Desire - Jonh Mayer" },
  { id:7, text:"兩者 - 張懸" },
  // { id:8, text:"並不 - 張懸" },
  // { id:9, text:"關於我愛你 - 張懸" },
  { id:10, text:"這個世界 - 安溥" },
  { id:11, text:"大風吹 - 草東沒有派對" },
  { id:12, text:"秦皇島 - 萬能青年旅店" },
  { id:13, text:"Don't invest in me - Adam Melchor" },
  { id:14, text:"Tomorrow - Avril Lavigne" },
  { id:15, text:"Transatlanticism - Death Cab For Cuties" }
]

var app = new Vue({
  el: '#app',
  delimiters: ['${', '}'],
  data: {
    message: music_list
  },
  methods:{
    choose: function(event,id){
      console.log(id);
      var player = document.getElementById("player");
      player.src="./music/"+id+".mp3";
      player.load();
      player.play();
    }
  }
})