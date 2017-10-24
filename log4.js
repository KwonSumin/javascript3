const LOG4_INFO = {
        none : [0,'none'],
        info : [1,'info'],
        debug : [2,'debug'],
        warn : [3,'warn'],
        error : [4,'error']
    }

var Log4 = function(){
    
    this.setInfo = LOG4_INFO.none;
    
    
    this.info = function (str){
        
        if(LOG4_INFO.info <= this.setInfo) {
            console.log(str);
        }
        
    }
    this.debug = function (str){
        if(LOG4_INFO.debug <= this.setInfo) {
            console.log(str);
        }
    }
    
    this.warn = function (str){
        if(LOG4_INFO.warn <= this.setInfo) {
            console.warn(str);
        }
    }
    
    this.error = function (str){
        if(LOG4_INFO.error <= this.setInfo) {
            console.error(str);
        }
    }
}

