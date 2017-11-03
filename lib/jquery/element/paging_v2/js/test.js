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
        }
        
        for(i=obj.startPage;i<=obj.endPage;i++){
            ui.wrapper.append(ui.pageNum.clone().html(i));
        }
        target.append(ui.wrapper);
        if(obj.totalPage > obj.pageSize){
            target.append(ui.next);
            target.append(ui.last);
        }
    }
    function linke(){
        
        ajax();
        util.onLink();
    }
    function move(move){
        
        ajax();
        util.onMove();
    }
    
    
}