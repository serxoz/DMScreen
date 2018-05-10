$( function() {
  //Verify token:
  var API = "http://127.0.0.1:8000";

  if (localStorage.token) {
    tk = localStorage.token;
    $.ajax({
      type: "POST",
      url: API+'/auth/verify_token/',
      data: {
        token: tk
      },
      success: function(data) {

      },
      error: function(data) {
        console.log(data);
        window.location.replace("index.html");
        //We could try here to renew the token...
      }
    });
  }else{
    window.location.replace("index.html");
  }

  //logout
  // $('#logout').click(function() {
  //   localStorage.clear();
  // });

  //Make tables draggable
  $("body .draggable").draggable({ handle: "#header", stack:"body .draggable"})


  $(".btn_task_bar").on("click", function(){
    let table_id = $(this).data("tableid");
    // console.log(table_id);
    $("#"+table_id).toggle();
  });

  $(".btn_min").on("click", function(){
    let table_id = $(this).data("tableid");
    // console.log(table_id);
    $("#"+table_id).toggle();
  });







});
