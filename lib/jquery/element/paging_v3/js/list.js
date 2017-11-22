/*
*   @author : sumin
*   @version : 1.0.3
*   @since : 2017. 11. 22
*/


var PagingList = function(){
    var info = {
        target : $('table'),
        limitRow : 10,
        title : [
            "No","제목","작성자","등록일"
        ],
        field : [
            'seq','title','reg_id','reg_date'
        ],
        name : 'board',
        list : [
            {4,'제목3241','ksm','2017-11-22'},
            {3,'제234목1','test','2017-11-21'},
            {2,'제목3324','asdf','2017-11-20'},
            {1,'제목2341','ksm','2017-11-20'}
        ]
    }
    this.setTarget = function(target){
        info.target = target;
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
    this.setList = function(list){
        this.info.list = list;
    }
    this.renderList = function(){
        
    }
    
}