/*
*   @author : sumin
*   @version : 1.0.0
*   @since : 2017. 11. 03
*   @param : 
*/

var Paging = function(){
    var util = this;
    var obj = {
        currentPage : 1,
        startPage : 1,
        endPage : 10,
        pageSize : 10,
        totalPage : 33,
        totalData : 324,
        pageIdx : 1,
        startRow : 0,
        endRow : 0,
        search : '',
        searchTarget : '',
        getMaxPageIdx : function(){
            return Math.ceil(this.totalPage / this.pageSize)-1;
        },
        getEndPage : function(){
            var page = this.startPage + this.pageSize -1;
            if(page > this.totalPage) return this.totalPage;
            return page;
        },
        view : function(){
            view();
        }
    }
    var target;
    
    
    
    var ui = {
        first : div().css({
            border : '1px solid black'
        }).html('<<'),
        back : div().css({
            border : '1px solid black'
        }).html('<'),
        next : div().css({
            border : '1px solid black'
        }).html('>'),
        last : div().css({
            border : '1px solid black'
        }).html('>>'),
        wrapper : div().css({
            border : '1px solid black'
        }),
        pageNum : div().css({
            
        })
    }
    
    //listener
    this.getObj = function(){return obj;}
    this.onMove = function(){}
    this.onLink = function(){}
    this.onAction = function(){}
    var ajax = function(){}
    this.setAjax = function(ajaxFun){
        ajax = ajaxFun;
    }
    this.setTarget = function(set){
        target = set;
        view();
    }
    
    
    function div(){
        var div = $('<div>').css('display','inline-block');
        return div;
    }
    
    function view(){
        target.html('');
        ui.wrapper.html('');
        if(obj.totalPage > obj.pageSize){
            target.append(ui.first);
            target.append(ui.back);
            
            ui.back.click(function(){
                move(-1);
            });
            ui.next.click(function(){
                move(1);
            });
            ui.first.click(function(){
                move('first');
            });
            ui.last.click(function(){
                move('last');
            });
        }
        
        for(i=obj.startPage;i<=obj.endPage;i++){
            var num = ui.pageNum.clone().html(i);
            ui.wrapper.append("&nbsp;");
            ui.wrapper.append(num);
            ui.wrapper.append("&nbsp;");
            num.data('page',i);
            num.click(function(){
                obj.currentPage = $(this).data('page');
                linke();
            });
            
        }
        target.append(ui.wrapper);
        if(obj.totalPage > obj.pageSize){
            target.append(ui.next);
            target.append(ui.last);
        }
    }
    function linke(){
        console.log(obj.currentPage)
        ajax();
        util.onLink(obj);
        util.onAction(obj);
    }
    function move(move){
        console.log(move);
        if(move=='first'){
            
            if(obj.currentPage == 1) return false;
            obj.currentPage =1;
            obj.startPage = 1;
            obj.endPage = obj.startPage + obj.pageSize -1;
            obj.pageIdx = 1;
            
            
        } else if(move=='last'){
            
            if(obj.currentPage == obj.totalPage) return false;
            obj.currentPage = obj.totalPage;
            var temp = obj.totalPage % obj.pageSize-1;
            if(temp == -1) {
                obj.startPage = obj.totalPage - obj.pageSize+1;
                obj.endPage = obj.totalPage;
                obj.pageIdx = obj.getMaxPageIdx(); 
            } else {
                obj.startPage = obj.totalPage - temp;
                obj.endPage = obj.totalPage;
                obj.pageIdx = obj.getMaxPageIdx();
            }
            
            
        } else {
            move = move*1;
            var movePage = obj.currentPage+move;
            var pageIdx = obj.pageIdx + move;
            if(pageIdx > obj.getMaxPageIdx()) return false;
            if( movePage < 1  && obj.currentPage==1) return false;else console.log(movePage);
            
            
            obj.pageIdx = pageIdx;
            console.log(obj)
            obj.startPage = obj.pageIdx * obj.pageSize +1;
            obj.endPage = obj.getEndPage();
            obj.currentPage = obj.startPage;
        }
        
        ajax();
        obj.view();
        util.onMove(obj);
        util.onAction(obj);
    }
    
    
}