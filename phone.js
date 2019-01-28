$(document).ready(function() {
  $("#content_dialer").show();
  $("#content_contacts").hide();
  $("#content_add").hide();
});
$("#Dialer").click(function() {
  $("#content_dialer").show();
  $("#content_contacts").hide();
  $("#content_add").hide();
});
$("#Contacts").click(function() {
  $("#content_contacts").show();
  $("#content_dialer").hide();
  $("#content_add").hide();
});
$("#Add_Contact").click(function() {
  $("#content_add").show();
  $("#content_dialer").hide();
  $("#content_contacts").hide();
});
