
//lpad,rpad 다른 언어들과 메소드명이 달라서 추가.
String.prototype.lpad = String.prototype.padStart;
String.prototype.rpad = String.prototype.padEnd;

    
/*
*   @author : sumin
*   @version : 1.0.0
*   @since : 2017. 10. 25
*   @description : {1}...{n}, ...args[1...n] 형태로 사용
*/
String.format = function(){
    var theString = arguments[0].toString();
    for (var i = 1; i < arguments.length; i++) {
        var regEx = new RegExp("\\{" + (i) + "\\}", "gm");
        theString = theString.replace(regEx, arguments[i]);
        console.log(regEx);
    }
    return theString;
}
String.prototype.format =function(){
    var theString = this.toString();
    for (var i = 0; i < arguments.length; i++) {
        var regEx = new RegExp("\\{" + (i+1) + "\\}", "gm");
        theString = theString.replace(regEx, arguments[i]);
        console.log(regEx);
    }
    return theString;
}

