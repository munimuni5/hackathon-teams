$(document).ready(function() {
 console.log("Hello from routing.js");

$('.delete').click(function(e){
  e.preventDefault();
  $.ajax({
    url: $(this).attr('href'),
    method: 'DELETE'
  }).done(function(data){
    window.location.href = '/teams';
  });
});
});


// $('.PUT').click(function(e){
//   e.preventDefault();
//   $.ajax({
//     url: $(this).attr('href'),
//     method: 'PUT'
//   // }).success(function(data){
//   //   window.location.href = '/teams';
//     console.log('edit button pressed')
//   });
// });