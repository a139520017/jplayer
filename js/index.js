$(document).ready(function(){
  var playlist = [{
      title:"NiceHidden",
      artist:"CuPlayer.com",
      mp3:"http://rm.sina.com.cn/wm/VZ2010050511043310440VK/music/MUSIC1005051622027270.mp3",
    },{
      title:"广东爱情故事",
      artist:"广东雨神",
      mp3:"http://www.ytmp3.cn/down/49494.mp3",
    },{
      title:"Them Mot Lan Dau",
      artist:"HKT-Band",
      mp3:"http://other.web.rb01.sycdn.kuwo.cn/resource/n3/58/11/2640944341.mp3",
  },{
      title:"云烟成雨",
      artist:"房东的猫",
      mp3:"http://www.ytmp3.cn/down/48951.mp3",
    },{
      title:"美少女与风铃",
      artist:"纯音乐团",
      mp3: "http://sc1.111ttt.cn/2015/1/09/29/102290849502.mp3",
  },{
      title:"Soviet March",
      artist:"《红警 3》原声主题曲",
      mp3: "http://www.ytmp3.cn/down/50284.mp3",
    }];
  
  var cssSelector = {
    jPlayer: "#jquery_jplayer",
    cssSelectorAncestor: ".music-player"
  };
  
  var options = {
    swfPath: "Jplayer.swf",
    supplied: "ogv, m4v, oga, mp3, wav, flac, ape"
  };
  
  var myPlaylist = new jPlayerPlaylist(cssSelector, playlist, options);

  openfile = function (){
    var file = document.getElementById('song');
    var name = file.files[0].name;
    var path = file.value;
    console.log(path);
    myPlaylist.add({
    title:name,
    mp3:path,
});
    myPlaylist.play(-1);
}
});



