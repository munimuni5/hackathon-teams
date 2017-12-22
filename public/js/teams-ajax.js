$(document).ready(function() {
 console.log("Hello from teams-ajax.js");

  $('.delete').click(function(e){
    e.preventDefault();
    $.ajax({
      method: 'DELETE',
      url: $(this).attr('href')
    }).done(function(response){
      window.location.href = '/teams';
    });
  });


$('.edit-form').submit(function(e){
  e.preventDefault();
  $.ajax({
    url: $(this).attr('action'),
    method: 'PUT',
    data: {
      name: $('#new-name').val(),
      members: $('#members').val()
    }
  }).done(function(response){
    window.location.href = '/teams';
    });
  });
});
