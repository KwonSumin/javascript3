/*
*   @author : sumin
*   @version : 1.0.0
*   @since : 2017. 11. 03
*   @param : action : ajax로 링크 처리 등 리스너 처리.
*   @description : ui(페이징 버튼과 넘버링)객체, list(리스트화면 랜더링)객체,
*       link 페이지 이동 관리 객체를 통합하여 관리하는 페이징 객체.
*       필수 설정사항
*       1. obj변수명과 info 변수명 매칭 시켜주면 됩니다.
*       2. ajax사용시 list객체를 생성하여 setter해주시면 됩니다.
*/


var PagingUtil = function(paging){
    //예외처리
    var checkError = new ExceptionUtil();
    //페이징 ui setter변경 가능.
    var ui = new ui();
    //paging객체와 필드명 매칭 디폴트값 setter로 변경가능
    var info = {
        currentPage : 'currentPage',
        totalData : 'totalData',
        totalPage : 'totalPage',
        limitPage : 'limitPage',
        startPage : 'startPage',
        endPage : 'endPage'
    }
    //link 페이징 리스너 등 이동 처리객체
    var link = new PagingLink(paging,info);
    //list화면 그려주는 객체 (ajax시 사용);
    var list;
    var isAjax = false;
    //ajax info
    var ajax = {
        url : '',
        method : 'POST',
        data : paging
    }
    
    //setListener
    this.setListener = function(util,name,fun){
        util[name] = fun;
    }
    
    
    //파라미터 유효성 검사
    checkError.isObject(arguments);
    checkError.isNotEmpty(arguments);
    
    //setter
    this.setUi = function(param){ui = param};
    this.setLink = function(param){link = param};
    this.setList = function(param){list = param};
    this.start = function(){start}
    this.setInfo = function(name,value){info[name] = value};
    this.setAjax = function(param) {ajax = param};
    //페이징객체 구동
    function start(){
        ui.render();
        if(isAjax) {
            list.render();
        } 
    }
    
    //ajax
    function ajax(){
        $.ajax({
            url:"",
            type:'POST',
            data: data,
            success:function(data){
                if(typeof data != 'Object')
                    data = JSON.parse(data);
                paging = data.paging;
            },
            error:function(data){
                console.log(data)
            }
        });
    }
}


/*
* 기존 object에 데이터 덮어쓰기
* 다른곳에서 참조되고 있는 객체를 다른 객체로 변경하면 곤란할경우 사용
* ex ) target = data 사용시 다른쪽에서 target은 이전 target 값을 가짐.
*/
function putData(target,data) {
    var keys = Object.keys(data);
    for(var key of keys) 
        target[key] = data[key];
}