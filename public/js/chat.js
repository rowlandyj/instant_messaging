$(function() {
  // create new pusher
  var pusher = new Pusher('689254ed9305f00ed841');
  // set default channel
  var channel = pusher.channel("flizzychat");
  // check for overages
  pusher.connection.bind( 'error', function( err ) {
    if( err.data.code === 4004 ) {
      log('>>> detected limit error');
    }
  });
  // show connection status in status div
  pusher.connection.bind('state_change', function(states) {
    $('div#status').text("Pusher's current state is " + states.current);
  });
  // method for debugging message send
  channel.bind('my-event', function(data) {
    alert('An event was triggered with message: ' + data.message);
  });
});