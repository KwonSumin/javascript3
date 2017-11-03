/*
*   @author : sumin
*   @version : 1.0.0
*   @since : 2017. 11. 03
*   @param : 
*/

var Paging = function(){
    var util = this;
    var obj = {
        currnetPage : 1,
        startPage : 1,
        endPage : 10,
        pageSize : 10,
        totalPage : 100,
        totalData : 100,
        pageIdx : 0,
        startRow : 0,
        endRow : 0,
        search : '',
        searchTarget : ''
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
            ui.wrapper.append(num);
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
        util.onLink();
        util.onAction();
    }
    function move(move){
        console.log(move);
        
        if('first'){
            
        } else if('last'){
            
        } else {
            
            obj.pageIdx += move;
        }
        
        ajax();
        
        util.onMove();
        util.onAction();
    }
    
    
}