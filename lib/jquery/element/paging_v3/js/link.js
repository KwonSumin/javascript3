/*
*   @author : sumin
*   @version : 1.0.3
*   @since : 2017. 11. 22
*/


var PagingList = function(){
    var info = {
        limitRow : 10,
        title : [
            "No","제목","작성자","등록일"
        ],
        field : [
            'seq','title','reg_id','reg_date'
        ],
        name : 'board'
    }
    
    this.setLimitRow = function(limitRow){
        this.info.limitRow = limitRow;
    }
    this.setLimitRow = function(title){
        this.info.title = title;
    }
    this.setLimitRow = function(field){
        this.info.field = field;
    }
    this.setLimitRow = function(name){
        this.info.name = name;
    }
    
}