$(document).ready(function(){
$.ajax({
 type: 'GET',
 url: 'https://api.twitch.tv/kraken/streams/freecodecamp',
 headers: {
   'Client-ID': '3rx6ggap39u3a1k3igguclgsbas39b'
 },
 success: function(data1) {
   if(data1.stream === null) {
     $("#fccStatus").html("FreeCodeCamp stream is currently offline");
   } else {
     $("#fccStatus").html("FreeCodeCamp stream is currently ONLINE"); 
   }
   //grabbing stream information if online
   if(data1.stream === null) {
     $("#fccStream").html("-----");
   } else {
      $("fccStream").html(data1.stream.channel.status);
     }
 }
});
$.ajax({
 type: 'GET',
 url: 'https://api.twitch.tv/kraken/streams/esl_sc2',
 headers: {
   'Client-ID': '3rx6ggap39u3a1k3igguclgsbas39b'
 },
 success: function(data2) {
   if(data2.stream === null) {
     $("#eslStatus").html("ESL_SC2 stream is currently offline.");
   } else {
     $("#eslStatus").html("ESL_SC2 stream is currently ONLINE");  
   }
   if(data2.stream === null) {
     $("#eslStream").html("-----");
     } else {
       $("#eslStream").html(data2.stream.channel.status);       
     }
 }
});
$.ajax({
 type: 'GET',
 url: 'https://api.twitch.tv/kraken/streams/ogamingsc2',
 headers: {
   'Client-ID': '3rx6ggap39u3a1k3igguclgsbas39b'
 },
 success: function(data3) {
   if(data3.stream === null) {
     $("#oGamingStatus").html("OgamingSC2 stream is currently offline.")
   } else {
     $("#oGamingStatus").html("ogamingSC2 stream is currently ONLINE") 
   }
   if(data3.stream === null) {
      $("#oGamingStream").html("-----");
     } else {
       $("#oGamingStream").html(data3.stream.channel.status)
     }
 }
});
$.ajax({
  type: 'GET',
  url: 'https://api.twitch.tv/kraken/streams/syndicate',
  headers: {
  'Client-ID': '3rx6ggap39u3a1k3igguclgsbas39b'
  },
  success: function(data4) {
    if(data4.stream === null) {
      $("#syndicateStatus").html("Syndicate stream is currently offline.");
    } else {
      $("#syndicateStatus").html("Syndicate stream is currently ONLINE.");
    }
    if(data4.stream === null) {
      $("#syndicateStream").html("-----");   
    } else {
      $("#syndicateStream").html(data4.stream.channel.status);
    }
  }
});
$.ajax({
  type: 'GET',
  url: 'https://api.twitch.tv/kraken/streams/summit1g',
  headers: {
  'Client-ID': '3rx6ggap39u3a1k3igguclgsbas39b'
  },
  success: function(data5) {
    if(data5.stream === null) {
      $("#summitStatus").html("Summit1g stream is currently offline.");
    } else {
        $("#summitStatus").html("Summit1g stream is currently ONLINE.")
    }
    if(data5.stream === null) {
      $("#summitStream").html("-----");
    } else {
        $("#summitStream").html(data5.stream.channel.status);
    }
  }
});
});