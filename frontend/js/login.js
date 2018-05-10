$( document ).ready(function() {
    console.log( "GO!" );
    var API = "http://127.0.0.1:8000";

    $(".login-form").submit(function( event ) {
      event.preventDefault();
      let user = $("#username").val();
      let pass = $("#password").val();

      $.ajax({
        type: "POST",
        url: API+"/auth/obtain_token/",
        data: {
          username: user,
          password: pass
        },
        success: function(data) {
          localStorage.token = data.token;
          // alert('Got a token from the server! Token: ' + data.token);
          window.location.replace("private.html");
        },
        error: function() {
          alert("Login Failed");
        }
      });


    });

});
