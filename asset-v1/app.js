/* haha ankaa boo- ehem */
var app=new function(){this.name="Alpha",this.version="1",this.date="2009",this.folder="asset-v1/",this.looptime=7687,this.bpm=100,this.totalframe=460,this.nbpolo=7,this.nbloopbonus=2,this.bonusloopA=!1,this.bonusendloopA=!1,this.recmaxloop=34,this.recminloop=4,this.recmintime=Math.round(this.looptime/1e3)*this.recminloop,this.spritepolo="polo-sprite.png",this.spritepolotshirt="polo-sprite-tshirt.png",this.spritepicto="game-picto.png",this.colBck="#2A2459",this.col0="#524C88",this.col1="#2A2459",this.col2="#4b4b4b",this.col3="#2A2459",this.col4="#534E7E",this.animearray=[{name:"1_scrounge",color:"2A2459",uniqsnd:!0},{name:"2_bubble",color:"2A2459",uniqsnd:!0},{name:"3_tapper",color:"2A2459",uniqsnd:!0},{name:"4_drain",color:"2A2459",uniqsnd:!0},{name:"5_pipe",color:"2A2459",uniqsnd:!0},{name:"6_sewerbass",color:"B20000",uniqsnd:!0},{name:"7_duck",color:"B20000",uniqsnd:!0},{name:"8_bounce",color:"B20000",uniqsnd:!0},{name:"9_tunnel",color:"B20000",uniqsnd:!0},{name:"10_faucet",color:"B20000",uniqsnd:!0},{name:"11_sudsy",color:"293D5E",uniqsnd:!0},{name:"12_banjo",color:"293D5E",uniqsnd:!0},{name:"13_depths",color:"293D5E",uniqsnd:!0},{name:"14_fume",color:"293D5E",uniqsnd:!0},{name:"15_shred",color:"293D5E",uniqsnd:!0},{name:"16_mayor",color:"7F7F7F",uniqsnd:!1},{name:"17_chant",color:"DDA680",uniqsnd:!0},{name:"18_doo",color:"DDA680",uniqsnd:!0},{name:"19_gargle",color:"DDA680",uniqsnd:!0},{name:"20_exhale",color:"DDA680",uniqsnd:!0}],this.bonusarray=[/*No bonuses?*/];for(var n=0,o=this.animearray.length;n<o;n++){var a=this.animearray[n].name;this.animearray[n].soundA=a+"_a",this.animearray[n].soundB=this.animearray[n].uniqsnd?a+"_a":a+"_b",this.animearray[n].anime=a+"-sprite.png",this.animearray[n].animeData=a+".json"}};