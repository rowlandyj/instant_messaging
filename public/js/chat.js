$(function(){
  var ENTER = 13;
  var socket = new WebSocket('ws://tie-fighter.local:8090');
  var chatLog = $('.chat_window')

  socket.onmessage = function(event){
    chatLog.append($('<p>' + event.data + '</p>'))
    console.log(event.data);
    chatLog.animate({scrollTop: chatLog.height()}, 1000)

  };

  $('.chat_input').keypress(function(event){
    var el = $(this);

    if (event.which == ENTER){
      socket.send(el.val());
      el.val('');
    }
  });


});