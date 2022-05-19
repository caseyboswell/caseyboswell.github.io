function testFunction() {
  alert('Function call works!');
}

function pushNotificaiton(seconds) {
  alert('pushNotification() called!');
  var title = "Notification Title"; //title of the notification
  var message = "Test"; //notification message
  var seconds = 5; //seconds from now on
  window.location.href = "sendlocalpushmsg://push.send?s="+ seconds +"=msg!"+ message +"&!#"+ title +"";
}

