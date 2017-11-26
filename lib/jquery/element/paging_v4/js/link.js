 /*
*   @author : sumin
*   @version : 1.0.3
*   @since : 2017. 11. 22
*/


var PagingLink = function(pagingParam){
    var paging = pagingParam ? pagingParam : {};
    var match = {
        currentPage : 'currentPage',
        startPage : 'startPage',
        endPage : 'endPage',
        totalData : 'totalData',
        limitPage : 'limitPage',
        limitRow : 'limitRow',
        startRow : 'startRow',
        totalPage : 'totalPage',
        endRow : 'endRow',
        search : 'search',
        searchTarget : 'searchTarget'
    }
    var target = {
        first : '',
        back : '',
        body : '',
        forward : '',
        last : '',
    }
    var info = {
        url : ''
    }
    var action = {
        first : function(){
            if(paging[match.currentPage] <= 1) return false;
            paging.currentPage = 1;
            setPageNum();
            renderBody()
            console.log(paging);
        },
        back : function(){
            if(paging[match.currnetPage] <= 1) return false;
            paging[match.currentPage] -= paging[match.limitPage];
            if(paging[match.currentPage] <1) paging[match.currentPage] = 1;
            setPageNum();
            renderBody()
            console.log(paging)
        },
        forward : function(){
            if(paging[match.currentPage] >= getTotalPage()) return false;
            var curPage = getData('currentPage') + getData('limitPage');
            if(getTotalPage() < curPage)curPage = getTotalPage();
            setData('currentPage',curPage);
            setPageNum();
            renderBody()
            console.log(paging)
        },
        last : function(){
            if(paging[match.currentPage] >= getTotalPage()) return false;
            setData('currentPage',getTotalPage());
            setPageNum();
            renderBody()
            console.log(paging)
        }
    }
    this.updatePaging = function(param){
        putData(paging,param);
    }
    this.setMatch = function(name,param){
        if(typeof name == 'object') {
            match = name;
        } else {
            match[name] = param;
        }
        
    }
    this.setTarget = function(name,param){
        if(typeof name =='object') {
            target = name;
        } else {
            target[name] = param;
        }
        
    }
    this.setInfo = function(name,param){
        if(typeof name =='object'){
            info = name;
        } else {
            target[name] = param;
        }
        
    }
    this.setOnWriteNumber = function(param){
        onWriteNumber = param;
    }
    
    this.renderBody = function(){
        renderBody();
        setClickListener_btn();
    }
    
    
    function move(){
        
    }
    function setClickListener_btn(){
        target.first.click(action.first);        
        target.back.click(action.back);

        target.forward.click(action.forward);
        target.last.click(action.last);
    }
    function renderBody(){
        var startPage = paging[match.startPage];
        var endPage = paging[match.endPage];
        target.body.html('');
        for(i=startPage;i<=endPage;i++){
            
            onWriteNumber(target.body,i);
        }
    }
    function onWriteNumber(body,idx){
        var query = '?currentPage='+paging[match.currentPage]
            + '&search=' + isEmpty(paging[match.search])
            + '&searchTarget=' + isEmpty(paging[match.searchTarget]);
        var url = info.url + query;
        var $a = $('<a href="#">').html(idx);
        $a.click(function(){
           paging[match.currentPage] = parseInt($(this).html());
            console.log(paging);
        });
        target.body.append($a);
        function isEmpty(data){
            return data == null ? '' : data;
        }
    }
    function putData(target,data){
        checkError.isObject(target,data);  //파라미터 오브젝트가 아닐시 오류 발생.
        var keys = Object.keys(data);
        for(i=0;i<=keys.length-1;i++) {
            target[keys[i]] = data[keys[i]];
        }
            
        return target;
    }
    function getTotalPage(){
        var totalData = paging[match.totalData];
        var limitRow = paging[match.limitRow];
        return Math.ceil(totalData / limitRow);
    }
    function getData(name){
        return paging[match[name]];
    }
    function setData(name,value){
        paging[match[name]] = parseInt(value);
    }
    function setPageNum(){
        var startPage = (Math.floor( (getData('currentPage') -1 ) / getData('limitPage') ))
            * getData('limitPage') + 1;
        console.log(startPage)
        var endPage = startPage + getData('limitPage') -1;
        setData('startPage',startPage);
        setData('endPage',endPage);
    }
}