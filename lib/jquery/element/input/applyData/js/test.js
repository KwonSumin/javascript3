/*
*   @author : sumin
*   @version : 1.0.0
*   @since : 2017. 10. 26
*   @description : 데이터를 적용할 input select 등 태그를 선택하여
*       value값이 같은항목 체크,선택
*/
$.fn.applyData = function(data,name){
    
    this.each(function(){
       if(this.value == data) {
           applyData($(this));
       } 
    });
    
    function applyData(target){
        
        var tagName = target[0].tagName;
        var type = target.attr('type');
        if(type=='checkbox' || type=='radio'){
            target.attr('checked',true);
            return;
        } else if(tagName=='OPTION'){
            target.attr('selected',true);
            return;
        }
        console.log(tagName);
        console.log(type);
        throw new Error('applyData Error\n아직 호환되지 않는 타입');
    }
    
}