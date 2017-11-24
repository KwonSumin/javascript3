/*
*   @author : sumin
*   @version : 1.0.0
*   @since : 2017. 11. 24
*   @discription :  
*       로그레벨 등 로그 사용할지 여부
*       로그에 대한 stack trace 처리 불편함으로 개발 중지
*   @needLib : jquery
*   한글테스트
*/

var LOGGER = {
    LEVEL : {
        DEBUG : 0,
        INFO : 1,
        WARN : 2,
        ERROR : 3,
        NONE : 4
    },
}

var LoggerUtil = function(){
    var level = 1;
    
    
    this.info = function(){
        
        console.trace(...arguments)
    }
    
}