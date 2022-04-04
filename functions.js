function testFunction() {
  alert('Function call works!');
}

function pushNotificaiton(seconds) {
  alert('pushNotification() called!');
  var message = "Javascript push notification test"; //the message
  var button = "Open App"; //the text of the button
  window.location.href = "sendlocalpushmsg://push.send?s="+ seconds +"=msg!"+ message +"&!#"+ button +"";
}