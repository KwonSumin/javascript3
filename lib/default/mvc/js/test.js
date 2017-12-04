/*
*   @author : sumin
*   @version : 1.0.0
*   @since : 2017. 12. 01
*   @description : mvc패턴
*/

var app = function(init){
    var service;
    var app = this;
    this.controller = new ctrl(init);
    this.setService = function(param){  
        service = param;
        app.controller.setService(param);
        //TODO : add Service obj Method
    }
}
var View = function(init){
    var model = init;
    this.update = function(name,data){
        var $target = $('[data-attr="update"][data-model="'+name+'"]');        
        var tagName = $target.prop('tagName');
        var data = model[name];
        var updateData = {
            default : function(){
                $target.html(model[name]);
            },
            TABLE : function(){
                $target.html('');
                var titles = data.title;
                var fields = data.field; 
                var datas = data.data;
                var titleRow = getTag('tr');
                $target.html(titleRow);
                for(var i=0;i<=titles.length-1;i++) {
                    titleRow.append(getTag('th').html(titles[i]));
                }
                for(var i=0;i<=datas.length-1;i++){
                    var $tr = getTag('tr');
                    for(var j=0;j<=fields.length-1;j++){
                        $tr.append(
                            getTag('td').html(datas[i][fields[j]])
                        );
                    }
                    $target.append($tr);
                    
                }
            }
        }
        
        if(updateData[tagName] == null) {
            updateData['default']();
        } else {
            updateData[tagName]();
        }
        function getTag(name){
            return $('<'+name+'>')
        }
        
        
    }
    /*
    function regex(){
        var ptt = /\{\{[^}]*\}\}/gi;
        var html = $('.myApp').html();
        var targets = html.match(ptt);
        if(targets==null) {
            alert('널')
            return;
        }
        for(var i=0;i<targets.length;i++){
            html = html.replace(targets[i],getModel(targets[i]));
            
        }
       
        $('.myApp').html(html);
        function getModel(regex){
            regex = regex.replace('{{','');
            regex = regex.replace('}}','');
            
            return model[regex] == null ? '' : model[regex];
        }
    }
    regex();
    */
}
var ctrl = function(init){
    
    var ctrl = this;
    var model = {name : 'sumin'};
    var view;
    var service;
    if(init != null) {
        initModel(init);
        view = new View(model);
    } else {
        view = new View(model);
    }
    this.setService = function(param){
        service = param;
    }
    this.call = function(name,...args){
        ctrl[name](model,service,...args);
    }
    this.add = function(name,fun){
        ctrl[name] = fun;
    }
    
    function initModel(init){
        var keys = Object.keys(init);
        for(var i=0;i<=keys.length-1;i++) {
            model[keys[i]] = init[keys[i]];
        }
    }
    this.update = function(name,value) {
        console.log('update : ',name, value);
        model[name] = value;
        view.update(name,value);
    }
};




