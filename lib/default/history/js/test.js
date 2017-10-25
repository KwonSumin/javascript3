var HistoryUtil = function(){
    
    this.map = new Map();
    this.list = [];
    var obj = this;
    
    
    
    /* 리스너 함수 */
    
    //원격함수 실행 성공시 실행
    this.onExecutes = function(){};
    //원격함수 실행 예외 발생시 실행
    this.onException = function(){};
    
    /*
    *   @param-type : function,...Object
    *   @param : 실행함수(fun),실행함수 아규먼트(...args)
    *   @return : 실행함수 리턴값
    *   @description : 함수이름,아규먼트,
    *       리턴값 등 객체로 리스트형식 기록.
    */
    this.execute = function(fun,...args) {
        try {
            var value = fun(...args);
            var result ={}

            result.name = fun.name;
            result.params = args;
            result.value = value;
            result.time = getCurrentTime();
            this.list.push(result);
            this.onExecutes();
        } catch (e) {
            console.log(e);
            this.onException();
        }
        
        return result;
        
    }
    /*
    *   @param-type : function,...Object
    *   @param : 실행함수(fun),실행함수 아규먼트(...args)
    *   @return : 실행함수 리턴값
    *   @description : 함수이름,아규먼트,
    *       리턴값 등 객체로 맵,리스트형식 기록.
    */
    this.saveMap = function(fun,name,...args) {
        try{
            var value = fun(...args);
            this.list.push(value);
            var result ={}

            result.name = fun.name;
            result.params = args;
            result.value = value;
            result.time = getCurrentTime();
            this.map.set(name,result);
            this.onExecutes();
        } catch (e) {
            
            this.onException();
            throw e;
        }
        
        return value;
    }
    
    
    
    function getCurrentTime() {
        var date = new Date();
        var month = (date.getMonth() + 1) +"";
        month = month.padStart(2,0);
        var day = date.getDate()+"";
        day = day.padStart(2,0);
        var hour = date.getHours()+"";
        var min = date.getMinutes()+"";

        return "["+month +"월 "+day+"일 "
        + hour + ":" + min+"]"
    }
    /*
    this.execute = function(str){
        var result;
        if(arguments.length > 1) {
            var args = Array.of(...arguments);
            delete args[0];
            args.shift();
            console.log(getMethodStr(str,args))
            result =  eval(getMethodStr(str,args));
            
        } else {
            
            result =  eval(getMethodStr(str));
        }
        saveList(result);
        return result;
    }
    
    function getMethodStr(execute,args) {
        var first = execute + '(';
        var end = ')';
        
        var result = first;
        for(i=0; i<=args.length-1; i++) {
            result += args[i];
            if(i!=args.length-1) result +=',';
        }
        result += end;
        return result;
    }
    
    function saveList(data) {
        console.log(data);
        console.log(obj.list)
        if(data != null)
        obj.list.push(data);
    }
    function saveHistory(name,data) {
        if(data != null)
        obj.history.set(name,data);
    }
    function save(data,name){
        if(name != null) history.set(name,data);
        obj.list.push(data);
    }
    */
}