$(function(){
  $("#btn").click(function(){
    $.ajax({
      url:"/message/321",
      type:"put",
      data:$("form").serialize(),
      success:function(data){
        $("input").val(data);
      }
    });
  });
});