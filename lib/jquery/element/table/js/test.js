/*
*   @author : sumin
*   @version : 1.0.0
*   @since : 2017. 10. 25
*   @param : 필드형태(fm)
*   fm : {
*       field * : 테이블에 표시할 이름 Array,
*       original * : 변수명칭 Array,
*       style : 적용할 스타일 json,
*              
*   }
*/
$.fn.setField = function(fm){
    if(this[0].tagName != 'TABLE') 
        throw new Error('테이블만 적용가능합니다');
    validParam(fm);
    
    var fields = fm.field;
    var names = fm.original;
    var table = this;
    var tr = $('<tr>').clone();
    var th = $('<th>').clone();
    var td = $('<td>').clone();
    
    
    var target = table.html(tr);
    for(i=0; i<=fields.length-1; i++) {
        var sub = th.data('field',fields[i]).attr('data-field',fields[i]).html(names[i]).clone();
        console.log(target);
        target.append(sub);
    }
    
    
     
    //내부 common 함수
    function help(){
        console.log(
'*   @author : sumin' +"\n"+
'*   @version : 1.0.0' +"\n"+
'*   @since : 2017. 10. 25' +"\n"+
'*   @param : 필드형태(fm)' +"\n"+
'*   fm : {' +"\n"+
'*       field *: 테이블에 표시할 이름 Array,' +"\n"+
'*       original *: 변수명칭 Array,' +"\n"+
'*       style : 적용할 스타일 json' +"\n"+
'*   }'  
        )
    }
    function validParam(fm) {
        try{
            if(typeof fm != 'object')
                throw new Error('오브젝트 파라미터만 가능합니다.');
            if(fm.field == null)
                throw new Error('filed는 필수 항목입니다.');
            if(fm.original == null)
                throw new Error('original은 필수 항목입니다.')
        } catch(e){
            help();
            throw e;
        }
        
        return false;
    }
    
}