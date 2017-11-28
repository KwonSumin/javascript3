/*
*   @author : sumin
*   @version : 1.0.0
*   @since : 2017. 11. 28
*   @discription :  
*       //@name() 형태로 주석처리 + 정규식
*       어노테이션 구현
*   
*/


var Annotation = function(){
    
    var util = this;
    this.setAnnotation = function(name,fun){
        this[name] = fun;
    }
    this.execute = function(fun){
        execute(getAnnotations(fun));
    }
    function execute(annotations){
        
        for(i=0;i<=annotations.length-1;i++) {
            var name = annotations[i].name;
            var option = annotations[i].option;
            console.log(name);
            try{
                util[name](annotations[i]);   
            }catch(e){
                console.warn('not found annotaion function\ntarget : ',util,'\nkey : ',name);
            }
        }
        
    }
    function getAnnotations(target){
        var str = target.toString();
        var pt = new RegExp(/\/\/@.*/g);
        var regAnnos = str.match(pt);
        var annotations = setObj(regAnnos);
        
        function setObj(annoArray){
            var result = [];
            for(var i=0;i<=annoArray.length-1;i++) {
                var temp = annoArray[i];
                var name = '';
                var option = '';
                temp = temp.replace('//@','');
                option = temp.match(/\(.*\)/gi)[0];
                option = option.replace('(','');
                option = option.replace(')','');
                option = option.replace(/('|")/gi,'');
                name = temp.replace(/\(.*/gi,'');
                option = setObjOptions(option);
                var obj = {name : name,target : target,option : option};
                result.push(obj);
            }
            
            return result;
        }
        function setObjOptions(param){
            var options = param.split(',');
            var values = [];
            var obj = {};
            for(var i=0;i<=options.length-1;i++) {
                
                var name = options[i].match(/[^=]*/);
                obj[name] = options[i].replace(name+'=','');
                values.push(obj);
            }
            return obj;
        }
        console.log(annotations)
        return annotations;
    }
}