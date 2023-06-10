function windowOp() {
    var newwindow = window.open("http://www.google.com", "newwindow", "height=100,width=200");
    newwindow.moveTo(200, 150);
    newwindow.close();
    window.close();
}

function navigatorProp() {
    document.write("<br> appcodeName:" + navigator.appCodeName);
    document.write("<br> appName:" + navigator.appName);
    document.write("<br> platform:" + navigator.platform);
    document.write("<br> platform:" + navigator.platform);
    document.write("<br>cookie is enabled:" + navigator.cookieEnabled);
    document.write("<br>product:" + navigator.product);
    document.write("<br>location:" + navigator.location)
}
navigatorProp();

function locationProp();