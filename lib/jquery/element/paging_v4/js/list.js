/*
*   @author : sumin
*   @version : 1.0.4
*   @since : 2017. 11. 26
*/


var RenderList = function(listParam){
    
    //list datas
    var list = listParam ? listParam : [{}];
    //table target jquery selector
    var target;
    //ex ) ['seq','title','name','reg_date']
    var fields;
    //list 설정셋팅 추가예정
    var info = {
        
    }
    var titles = [];
    var checkError = new ExceptionUtil();
    this.setTitles = function(param){titles=param}
    this.setTarget = function(param){target = param}
    this.setList = function(param){list = param}
    this.setFields = function(param){fields = param}
    this.setInfo = function(name,param){info[name] = param}
    this.renderList = function(){
        renderList();
    }
    this.changeList = function(param){changeData(list,param)}
    this.setOnWriteData = function(param){
        param.default = onWriteData;
        onWriteData = param; 
     }
    function renderList(){
        
        if(titles) {
            var $tr = $('<tr>');
            target.html($tr);
            for(i=0;i<=titles.length-1;i++) {
                var $th = $('<th>');
                $th.html(titles[i])
                $tr.append($th);
            }
        }
        for(i=0;i<=list.length-1;i++) {
            var $tr = $('<tr class="row">');
            for(j=0;j<=fields.length-1;j++){
                var $td = $('<td data-fields="'+fields[j]+'">');
                var data = list[i][fields[j]];
                onWriteData($td,data,fields[j])
                
                $tr.append($td);
            }
            target.append($tr);
        }
        
    }
    function onWriteData(td,data,field){
        td.html(data);
    }
    
    function changeData(target,data){
        checkError.isObject(target,data);  //파라미터 오브젝트가 아닐시 오류 발생.
        var keys = Object.keys(data);
        for(i=0;i<=keys.length-1;i++) {
            delete target[keys[i]];
            target[keys[i]] = data[keys[i]];
        }
            
        return target;
    }

}