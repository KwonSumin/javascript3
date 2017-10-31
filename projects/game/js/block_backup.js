

var Tetris_Block = function(){
    var util = this;
    var buttonInfo = [
        'NONE','UP','DOWN','LEFT','RIGHT','START',
        'PAUSE','BUTTON_A','BUTTON_B','BUTTON_C','BUTTON_D'
    ];
    this.format = [ 
        [
            [0, 0, 0],
            [0, 1, 1],
            [0, 1, 1]
        ],
        [
            [0, 0, 1, 0],
            [0, 0, 1, 0],
            [0, 0, 1, 0],
            [0, 0, 1, 0]
        ]
    ];
    
    this.color = {
        array : ['white','red','blue','yellow'],
        WHITE : 0,
        RED : 1,
        BLUE : 2,
        YELLOW : 3
    }
    this.info = {
        targetSize : [4,4],
        width : 20,
        height : 20
        
    }
    this.basicCss = {
        block : {
            width : this.info.width+"px",
            height : this.info.height+"px",
            backgroundColor : 'red',
            border : '1px solid black',
            display : 'inline-block',
            position : 'relative',
            verticalAlign : 'bottom'
        },
        blank : {
            width : this.info.width+"px",
            height : this.info.height+"px",
            border : '1px solid black',
            display : 'inline-block',
            position : 'relative',
            verticalAlign : 'bottom'
        },
        target : {
            width : this.info.width * this.info.targetSize[0]+this.info.targetSize[0]*3+"px",
            height : this.info.height * this.info.targetSize[1]+this.info.targetSize[1]*3+"px",
            position : 'relative'
        }
    }
    
    
    
    this.rotate = function(target){

        var format = [
            [0,0,0,0],
            [0,0,0,0],
            [0,0,0,0],
            [0,0,0,0]
        ]
        
        
        var result = [
            [0,0,0,0],
            [0,0,0,0],
            [0,0,0,0],
            [0,0,0,0]
        ];
        //format[1][1] = c;
        var arr = target.format;
        var obj = setRefer(arr);
        var i=0;
        console.log(obj);
        var refer1 = obj.referList[i];
        var temp1 = obj.tempList[i++];
        
        var refer2 = obj.referList[i];
        var temp2 = obj.tempList[i++];
        
        var refer3 = obj.referList[i];
        var temp3 = obj.tempList[i++];
        
        var refer4 = obj.referList[i];
        var temp4 = obj.tempList[i++];
        
        
        
        changeFormat(format);
        console.log(result);
        
        //result = format.slice(0);
        
        arr.pop();
        format.pop();
        arr.shift();
        format.shift();
        for(i=0; i<=arr.length-1; i++) {
            arr[i].shift();
            format[i].shift();
            arr[i].pop();
            format[i].pop();
            
        }
        
        var obj = setRefer(arr);
        var i=0;
        //console.log(obj);
        var refer1 = obj.referList[i];
        var temp1 = obj.tempList[i++];
        
        var refer2 = obj.referList[i];
        var temp2 = obj.tempList[i++];
        
        var refer3 = obj.referList[i];
        var temp3 = obj.tempList[i++];
        
        var refer4 = obj.referList[i];
        var temp4 = obj.tempList[i++];
        
        changeFormat(format);
        
        
        for(i=0;i<=format.length-1;i++){
            
            for(j=1;j<=format[i].length-1; j++) {
                result[i][j] = format[i][j];
            }
            
        }
        console.log('결과')
        console.log(result);
        
        function setRefer(arr){
           
            var refer1 =[]
            for(i=0; i<=arr[0].length-1; i++) {
                refer1.push([0,i]);
            }
            var refer2 = [];
            for(i=arr.length-1; i>=0; i--) {
                refer2.push([
                    i,arr[i].length-1
                ])
            }
            var refer3 = [];
            for(i=0; i<=arr[arr.length-1].length-1; i++) {
                refer3.push([arr.length-1,i]);
            }
            var refer4 = [];
            for(i=arr.length-1; i>=0; i--) {
                refer4.push([i,0])
            }

            var temp1;
            var temp2;
            var temp3;
            var temp4;

            var c = arr[1][1];
            saveTemp();
            /*
            console.log(temp1);
            console.log(temp2);
            console.log(temp3);
            console.log(temp4);

            console.log(refer1);
            console.log(refer2);
            console.log(refer3);
            console.log(refer4);
            */

            
            return {
                tempList : [temp1,temp2,temp3,temp4],
                referList : [refer1,refer2,refer3,refer4]
            };
            
            function saveTemp(){
                temp1 = [];
                for(i=0;i<=refer1.length-1;i++) {
                    var idx1 = refer1[i][0];
                    var idx2 = refer1[i][1];
                    temp1.push(
                        arr[idx1][idx2]
                    )
                }
                temp2 = [];
                for(i=0;i<=refer2.length-1;i++) {
                    var idx1 = refer2[i][0];
                    var idx2 = refer2[i][1];
                    temp2.push(
                        arr[idx1][idx2]
                    )
                }
                temp3 = [];
                for(i=0;i<=refer3.length-1;i++) {
                    var idx1 = refer3[i][0];
                    var idx2 = refer3[i][1];
                    temp3.push(
                        arr[idx1][idx2]
                    )
                }
                temp4 = [];
                for(i=0;i<=refer4.length-1;i++) {
                    var idx1 = refer4[i][0];
                    var idx2 = refer4[i][1];
                    temp4.push(
                        arr[idx1][idx2]
                    )
                }
            }

        }
        
        
        function changeFormat(format){
            var i =0;
            
            format[0] = temp4;
            for(i=0;i<=format[0].length-1;i++){
               // console.log(i);
                format[i][format.length-1] = temp1[i];
                
            }
            //console.log(temp2)
            format[format.length-1] = temp2;
            
            for(i=0;i<=format[0].length-1;i++){
               // console.log(temp3[i]);
                format[i][0] = temp3[i];   
            }
            
        }
        
        
    }
    
    this.move = function(target,move){
        var pitch = (this.info.width +1) * move;
        var left = target.css('left').replace('px','');
        left = parseInt(left);
        console.log(left);
        console.log(pitch)
        console.log(this.info.width)
        target.css('left',left+pitch);
    }
    
    
    this.convertArrayToBlock = function(arr,target){
        target.html('');
        target.css(util.basicCss.target);
        for(i=0; i<=arr.length-1; i++) {
        
            for(j=0; j<=arr[i].length-1; j++) {
                var div = getDiv();
                setBlock(arr[i][j],div);
                target.append(div);
            }
            
        }
        console.log('create arr')
        console.log(arr)
        target.format = arr;
        
        return target;
    }   
    
    function setBlock(num,target){
        var color = this.color;
        var type = (num > 0) ? 'block' : 'blank';
        var basicCss = util.basicCss;
        
        var css = (type == 'block') ? basicCss.block : basicCss.blank;
        target.css(css);
        
    }
    function getDiv(){
        return $('<div>').clone();
    }
    
}


