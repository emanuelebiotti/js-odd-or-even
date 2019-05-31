$(document).ready(function(){

  $('button').click(function(){

    $.ajax({
      'url': 'https://www.boolean.careers/api/random/int',
      'method': 'GET',
      'success': function(numeri){
        console.log(numeri);
        if(numeri.response % 2 == 0) {
          $('.left').append('<p>' + numeri.response + '<p>');
          var messageBody = document.querySelector('.left');
          messageBody.scrollTop = messageBody.scrollHeight - messageBody.clientHeight;
        } else if (numeri.response % 2 == 1) {
          $('.right').append('<p>' + numeri.response + '<p>');
          var messageBody = document.querySelector('.right');
          messageBody.scrollTop = messageBody.scrollHeight - messageBody.clientHeight;
        }
      },
      'error': function(){
        alert('errore');
      }
    });
  });
});
