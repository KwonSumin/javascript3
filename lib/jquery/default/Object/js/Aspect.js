/*
*   @author : sumin
*   @version : 1.0.0
*   @since : 2017. 11. 24
*   @discription :  
*       java AOP ?????? ???..
*   @needLib : jquery
*/

var Aspect = function(){
    this.before = function(target,aopFun){
        
        before(target,aopFun);
    }
    this.afterReturn = function(target,aopFun){
        afterReturn(target,aopFun);
    }
    
    
    function afterReturn(run,returnFun){
        
        window[run.name||run.aopName] = function(){
            var ret = run(...arguments);
            returnFun(ret);
        };
    }
    
    function before(run,beforeFun){
        window[run.name||run.aopName] = function(){
            
            beforeFun(...arguments);
            return run(...arguments);
        };
        window[run.name].aopName = run.name;
    }
}