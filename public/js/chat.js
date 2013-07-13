// Pusher.log = function(message) {
//   if (window.console && window.console.log) {
//     window.console.log(message);
//   }
// };
// var pusher = new Pusher('689254ed9305f00ed841');
// var channel = pusher.subscribe('test_channel');
// channel.bind('my_event', function(data) {
//   alert(data.message);
// });
$(function() {
  var pusher = new Pusher('689254ed9305f00ed841');
  var chatWidget = new PusherChatWidget(pusher, {
    chatEndPoint: 'pusher-realtime-chat-widget/src/php/chat.php'
  });
});