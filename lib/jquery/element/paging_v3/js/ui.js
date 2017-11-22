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
        first : $('<div>').css(getCss()).html('<<'),
        back : $('<div>').css(getCss()).html('<'),
        body : $('<div>').css(getCss()),
        forward : $('<div>').css(getCss()).html('>'),
        last : $('<div>').css(getCss()).html('>>'),
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
    this.getPaging = function(start,end,action){
        var $wrapper = $('<div>');
        $wrapper.append(ui.first);
        $wrapper.append(ui.back);
        $wrapper.append(ui.body);
        $wrapper.append(ui.forward);
        $wrapper.append(ui.last);
        console.log(action);
        for(i=start;i<=end;i++){
            
            var $link = ui.link.clone().html(i);
            
            ui.body.append($link);
            $link.click(action.link);
        }
        
        ui.first.click(action.move);
        ui.back.click(action.move);
        ui.forward.click(action.move);
        ui.last.click(action.move);
        
        
        
        return $wrapper;
        
    }
    
    ui.first.data('move','first');
    ui.back.data('move','back');
    ui.last.data('move','last');
    ui.forward.data('move','forward');
    function getCss(){
        return {
            display : 'inline-block',
            border : '1px solid black',
            
        };
    }
}


