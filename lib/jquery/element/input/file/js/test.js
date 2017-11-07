/*
*   @author : sumin
*   @version : 1.0.0
*   @since : 2017. 11. 06
*   @param : 
*/



var ImgUpload = function(){
    
    
    var imgAttr = {
        width : '100px',
        height : '100px'
    }
    this.setTarget=function(target){this.target = target;}
    this.setPreview=function(view){this.preView = view;}
    this.start=function(){start()}
    this.onWriteSucces = function(){}
    var util = this;
    function start(){
        onImgUpload();
    }
    
    function getImg(){
        var img = new Image();
        var keys = Object.keys(imgAttr);
        var values = Object.values(imgAttr);
        
        for(i=0;i<=keys.length-1;i++){
            img[keys[i]] = parseInt(values[i]);
            console.log(keys[i])
            console.log(values[i])
        }
        return img;
    }
    
    getImg();
    function onImgUpload(){
        util.target.on('change',function(e){
            
            
            
            var files = util.target[0].files;
            var idx = 0;
            var file = files[idx++];
            var isWrite = true;
            
            for(var file of files) {
                if(file) write(file);
            }
            
            function write(blob){
                var reader = new FileReader();
                var img = getImg();
                reader.addEventListener('load',function(){
                    img.src = reader.result;
                    util.preView.append(img);
                    
                },false);
                reader.readAsDataURL(blob);
            }
            
        });
    }
}