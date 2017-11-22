/*
*   @author : sumin
*   @version : 1.0.0
*   @since : 2017. 11. 03
*   @param : 
*/

var PagingUtil = function(){
    var ui = {getPaging:function(){}};
    var link = {};
    var list = {getList:function(){}};
    var target = {
        table : $('table'),
        paging : $('.paging')
    }
    var bean = {
        startPage : 1,
        endPage : 10
    }
    var action = {
        move : function(){},
        link : function(){},
        search : function(){}
    }
    this.setTarget = function(t,obj){
        console.log(t);
        console.log(target[t])
        target[t] = obj; 
    }
    this.setUi = function(param){
        ui = param;
    }
    this.setLink = function(param){
        link = param;
    }
    this.setList = function(param){
        list = param;
    }
    this.start = function(){
        renderPaging();
        renderList();
        console.log('start')
    }
    this.setAction = function(t,fun) {
        action[t] = fun;
    }
    
    function renderList(){
        target.table.html(list.getList());
    }
    function renderPaging(){
        var start = bean.startPage;
        var end = bean.endPage;
        target.paging.html(ui.getPaging(start,end,action.move));
    }
    
}