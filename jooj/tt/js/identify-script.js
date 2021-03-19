$("#login").focus(function(){
	$("#placeholderLogin").addClass("placeNum");
	$("#error-msg-box-login").hide();
    $("#login").parents(".form-group").removeClass("has-error");
});
$("#login").focusout(function(){
    $("#placeholderLogin").removeClass("placeNum");
});
$("#btnSubmitEmail").click(function () {
	$("#placeholderLogin").removeClass("placeNum");
});