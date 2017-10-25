const   LOG4_INFO = {
        none : 0,
        info : 1,
        debug : 2,
        warn : 3,
        error : 4
    }

var Log4 = function(){
    
    this.setInfo = LOG4_INFO.none;
    
    
    this.info = function (str){
        
        if(LOG4_INFO.info <= this.setInfo) {
            getStack();
            console.log(str);
        }
        
    }
    this.debug = function (str){
        if(LOG4_INFO.debug <= this.setInfo) {
            getStack();
            console.log(str);
        }
    }
    
    this.warn = function (str){
        if(LOG4_INFO.warn <= this.setInfo) {
            getStack();
            console.warn(str);
        }
    }
    
    this.error = function (str){
        if(LOG4_INFO.error <= this.setInfo) {
            getStack();
            console.error(str);
        }
    }
    
    
    function getStack(){
        var stack = new Error().stack;
        stack = stack.split('\n');
        console.log(stack[2]);
    }
    
    
}

