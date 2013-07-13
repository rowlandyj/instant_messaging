$(function() {
  // create new pusher
  var pusher = new Pusher('689254ed9305f00ed841', {encrypted: true});
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
});