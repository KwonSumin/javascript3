/*
*   @author : sumin
*   @version : 1.0.0
*   @since : 2017. 10. 26
*   @param : data
*       keys : total,curPage,pageCount,rowCount,startPage,endPage
*
*/

$.fn.paging = function(data){
    validParam(data);
    
    var totalPage = Math.ceil(data.total / data.rowCount);
    data.totalPage = totalPage;
    
    //예외상황 처리
    if(data.startPage == null)
        data.startPage = 1;
    if(data.endPage == null)
        data.endPage = data.pageCount;
    if(data.endPage > totalPage)
        data.endPage = totalPage;
    var div = $('<div>').css({
        display : 'inline-block',
        border : '1px solid black',
        marginLeft : '5px',
        cursor : 'pointer'
    });
    
    
    
    
    //data 메소드 추가
    data.move = function(m){
        data.curPage = data.startPage + (m*data.pageCount);
        data.startPage = data.startPage + (m*data.pageCount);
        data.endPage = data.startPage + data.pageCount-1;
        console.log(data)
    }
    data.first = function(){
        data.curPage = 1;
        data.startPage = 1;
        data.endPage = data.pageCount;
    }
    data.last = function(){
        data.curPage = totalPage;
        data.startPage = getStartNum();
        data.endPage = totalPage;
        
        
        function getStartNum(){
            var temp = totalPage / data.pageCount;
            temp = ( temp - parseInt(temp) ).toFixed(1) * 10;
            temp = (totalPage - temp );
            console.log(temp);
            
            return Math.floor(temp)+1;
        }
    }
    
    var first = div.clone().html('<<');
    var back = div.clone().html('<');
    var pages = div.clone();
    var forward = div.clone().html('>');
    var last = div.clone().html('>>');
    
    
    if(totalPage > data.pageCount) {
        this.append(first);
        this.append(back);
    }
    
    
    
    this.append(pages);
    
    if(totalPage > data.pageCount) {
        this.append(forward);
        this.append(last);
    }
    
    first.on('click',function(){
        if(data.curPage == 1) return false;
        data.first();
        paging();
    })
    
    last.on('click',function(){
        if(data.curPage == data.totalPage) return false;
        data.last();
        paging();
        console.log(data)
    })
    
    back.on('click',function(){
        if(data.startPage == 1) return false;
        console.log('back');
        data.move(-1);
        paging();
    })
    forward.on('click',function(){
        if(data.endPage == data.totalPage) return false;
        console.log('forward');
        data.move(1);
        paging();
    })
    
    
    
    console.log(totalPage)
    
    paging();
    
    function paging() {
        //페이징 처리
        
        pages.html('');
        for(i=data.startPage; i<=data.endPage; i++) {

            if(num >= totalPage ) break;

            var num = i;
            var pageNum = $('<div>').clone().html(num)
                .css({display:'inline-block',width : '15px',
                        padding : '0px 2px 0px 2px'
                     })
                .attr({
                    'data-page' : num,
                    class : 'pageNum'
                }).data('page',num);
            pages.append(pageNum);

            if(data.curPage == num)
                pageNum.attr('class','curPage');
            else
                pageNum.removeClass('curPage');


            pageNum.on('click',function(){
                if($(this).hasClass('curPage')) return false;
                var page = $(this).data(page);
                console.log(page);
                data.curPage = page;
                pages.find('.curPage').attr('class','pageNum');
                pages.find('[data-page="'+page.page+'"]').attr('class','curPage');

            })


        }
    }
    
    
    
    //내부 함수들
    function help(){
        
    }
    
    function validParam(data) {
        
        var accept = ['object']
        var indispensable = [];
        
        try{
            if(accept.indexOf(typeof data) == -1 )
                throw new Error('잘못된 파라미터 입니다.');
            if(!hasIncludeItem(data,indispensable))
                throw new Error('필수항목 누락되었습니다.');
        } catch(e){
            help();
            throw e;
        }
        return false;
    }
    function hasIncludeItem(data,item){
        
        
        var keys = Object.keys(data);
        for(i=0; i<=item.length-1; i++) {
            var isFindItem = keys.indexOf(item[i]) != -1;
            if(!isFindItem) {
                return false;
            }
        }
        return true;
    }
}