function test() {
    if (navigator.userAgent.match(/Mac/i)) {
        var useragent = document.getElementById('useragent')
        useragent.addEventListener('click', function(){
        alert(navigator.userAgent);
      });
    }
}