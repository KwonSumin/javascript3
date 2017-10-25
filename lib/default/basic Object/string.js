
//lpad,rpad 다른 언어들과 메소드명이 달라서 추가.
String.prototype.lpad = String.prototype.padStart;
String.prototype.rpad = String.prototype.padEnd;



String.format = function(){
   
    var theString = arguments[0].toString();

    for (var i = 1; i < arguments.length; i++) {
        var regEx = new RegExp("\\{" + (i - 1) + "\\}", "gm");
        theString = theString.replace(regEx, arguments[i]);
    }

    return theString;
    
}
String.prototype.format =function(){
     var theString = this.toString();
        for (var i = 0; i < arguments.length; i++) {
            var regEx = new RegExp("\\{" + (i) + "\\}", "gm");
            theString = theString.replace(regEx, arguments[i]);
        }

        return theString;
}