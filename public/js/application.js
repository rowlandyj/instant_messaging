$(document).ready(function() {
  $('#login').on('submit', function(e){
    e.preventDefault();
    $.post('/login', $(this).serialize()).done(function(response){
    });
  });
});
