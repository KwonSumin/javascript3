/*
*   @author : sumin
*   @version : 1.0.0
*   @since : 2017. 11. 02
*   @param : 
*/

var TableUtil = function(){
    this.callback = function(){};
    this.count = 1;
    var util = this;
    setInterval(test,5000);
    
    function test() {
        util.count++;
        util.callback(util.count);
    }
}