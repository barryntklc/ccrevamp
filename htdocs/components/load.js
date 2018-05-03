$(function(){

    //alert(document.URL);

    ///**
    // * Adapted from https://jennamolby.com/how-to-display-dynamic-content-on-a-page-using-url-parameters/
    // **/
    //function getParam(name) {
    //    var url = window.location.href;
    //    name = name.replace(/[\[\]]/g, "\\$&"); //cleans identifier parameter
    //    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"), //todo figure out what this regexp is doing
    //        results = regex.exec(url);
    //    //alert(
    //    //    "" + results[0] + "\n" +
    //    //    "" + results[1] + "\n" +
    //    //    "" + results[2] + "\n"
    //    //);
    //
    //    var value = results[2];
    //    //alert(value);
    //    //alert(value == 'home');
    //
    //    if (value == 'home')
    //        $("#content-div").load("pages/home.html");
    //    else {
    //        $("#content-div").load("pages/home.html");
    //    }
    //}
    //
    //getParam('page');

    /**
     * https://stackoverflow.com/questions/950087/how-do-i-include-a-javascript-file-in-another-javascript-file
     */


    $("#libraries").load("components/libraries.html");
    $("#splash").load("components/splash.html");
    $("#nav").load("components/nav.html");
});