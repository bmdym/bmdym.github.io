$(document).ready(function() {
  $("#content_dialer").show();
  $("#content_contacts").hide();
  $("#content_add").hide();
  $("#content_help").hide();
});
$("#Dialer").click(function() {
  $("#content_dialer").show();
  $("#content_contacts").hide();
  $("#content_add").hide();
  $("#content_help").hide();
});
$("#Contacts").click(function() {
  $("#content_contacts").show();
  $("#content_dialer").hide();
  $("#content_add").hide();
  $("#content_help").hide();
});
$("#Add_Contact").click(function() {
  $("#content_add").show();
  $("#content_dialer").hide();
  $("#content_contacts").hide();
  $("#content_help").hide();
});
$("#Help").click(function() {
  $("#content_help").show();
  $("#content_dialer").hide();
  $("#content_contacts").hide();
  $("#content_add").hide();
});
$("#content_dialer button").click(function() {
	$("#input").val($("#input").val() + this.innerText);
})

$("#Clear").click(function() {
	$("#input").val("");
})
