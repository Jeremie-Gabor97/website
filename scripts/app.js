var app = angular.module("angularApp",['ngSanitize']);

function onLoad() {
    //this is an example of an alert function
    //alert("Function onLoad() called");
    getAPIBadge();
}

function getAPIBadge(){
    var ctcAPI = "http://ChooseToCode.azurewebsites.net/api/values/";
    $.post( ctcAPI, {
        SchoolName:"Joe's Choose To Code",
        ZipCode: "33602",
        Level: "Beginner"
    }).done(function( data ) {
        $("$badge").html(data);
    });
}
