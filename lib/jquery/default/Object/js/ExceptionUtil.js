/*
*   @author : sumin
*   @version : 1.0.0
*   @since : 2017. 11. 24
*   @discription :  
*       Exception 함수로 확인
*   @needLib : jquery
*/


var checkError = {
    isObject : function(){
        commonCheck(arguments,function(arg){
            if(typeof arg!='object')
                throw new Error('object형태만 가능합니다.');
        });
    },
    isNotNull : function(){
        commonCheck(arguments,function(arg){
            if(arg==null)
                throw new Error('null값을 받을수 없습니다.')
        })
    },
    isEmpty : function(){
        commonCheck(arguments,function(arg){
            var keys = Object.keys(arg);
            if(keys.length == 0) //String형 ''도 keys.length=0;
                throw new Error('값이 비어있습니다.');
            if(keys.length == null){
                console.wran(typeof arg)
                console.warn('checkError : 예외사항일 수 있음.');
                throw new Error('값이 비어있습니다.');   
            }
        })
    }
}


//에러 체크시 공통적 형식 함수로뺌
function commonCheck(args,addFun){
    for(i=0;i<=args.length-1;i++) {
        addFun(args[i]);
    }
}