/*
*   @author : sumin
*   @version : 1.0.3
*   @since : 2017. 11. 22
*/

var PagingUi = function(){
/*
 * [< <] first
 * [ < ] back
 * [ 1 2 3 4 5 6 7 8 9 10] body
 * [ > ] forward
 * [> >] last
 */
    var ui = {
        first : $('<div>'),
        back : $('<div>'),
        body : $('<div>'),
        forward : $('<div>'),
        last : $('<div>'),
        name : 'paging',
        link : $('<a href="javascript:void(0)">')
    }  
    this.setFirst = function(first) {
        ui.first = first;
    }
    this.setBack = function(back) {
        ui.back = back;
    }
    this.setBody = function(body) {
        ui.body = body;
    }
    this.setForward = function(forward) {
        ui.forward = forward;
    }
    this.setLast = function(last) {
        ui.last = last;
    }
    this.setName = function(name) {
        ui.name = name;
    }
    this.setCss = function(target,css) {
        if(ui[target] != null) {
            ui[target].css(css);
        }
    }
    this.getObj = function(){
        return ui;
    }
    this.moveFun = function(){}
    this.getPaging = function(start,end,moveFun){
        var $wrapper = ui.body.clone();
        for(i=start;i<=end;i++){
            
            var $link = ui.link.clone().html(i);
            $link.click(moveFun);
            $wrapper.append($link);    
        }
        
        return $wrapper;
        
    }
    
}


