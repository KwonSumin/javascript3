

var Tetris_Block = function(){
    
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
            [1, 1, 1],
            [1, 1, 1],
            [1, 1, 0]
        ]
    ];
    var util = this;
    
    this.gridBlock = function(formatNum,target){
        var format = this.format;
        var block = $('<div>').attr('class','block').css({
            width : '20px',
            height : '20px',
            backgroundColor : 'red',
            border : '1px solid black',
            display : 'inline-block',
            position : 'relative',
            verticalAlign : 'bottom'
        })
        var blank = $('<div>').attr('class','block').css({
            width : '20px',
            height : '20px',
            border : '1px solid black',
            display : 'inline-block',
            position : 'relative',
            verticalAlign : 'bottom'
        })
        var result = $('<div>').attr('class','block').css({
            width : '66px',
            position : 'relative',
            height : '60px'
        })
        var array;
        if(typeof formatNum == 'object') {
            array = formatNum;
        } else {
            array = this.format[formatNum];
        }
         
        
        
        
        for(i=0; i<=array.length-1; i++) {
            for(j=0; j<=array[i].length-1 ;j++) {
                if(array[i][j]==0) result.append(blank.clone()); else result.append(block.clone());
                //console.log(array[i][j])
            }
        }
        if(target != null)
            target.append(result);
        this.target = result;
        result.formatBlock = array;
        
        result.up = function(){
            
            var target = util.target.formatBlock;
            var temp1 = target[0];
            var referIdx1 = [
                [0,2],[0,1],[0,0]
            ];
            
            
            var temp2 = [];
            var referIdx2 = [
              [0,2],[1,2],[2,2]  
            ];
            
            temp2.push(target[0][2]);
            temp2.push(target[1][2]);
            temp2.push(target[2][2]);
            var temp3 = target[2];
            var referIdx3 = [
                [2,2],[2,1],[2,0]
            ];
            
            
            
            var temp4 = [];
            var referIdx4 = [
                [0,0],[1,0],[2,0] 
            ];
            
            temp4.push(target[0][0]);
            temp4.push(target[1][0]);
            temp4.push(target[2][0]); 
            /*
            console.log(temp1);
            console.log(temp2);
            console.log(temp3);
            console.log(temp4);
            */
            
            
            var c = target[1][1];
            var result = 
            [
                [0,0,0],
                [0,c,0],
                [0,0,0]
            ];
           
            
            
            changeBlock(temp1,referIdx2,result);
            changeBlock(temp2,referIdx3,result);
            changeBlock(temp3,referIdx4,result);
            changeBlock(temp4,referIdx1,result);   
            
            console.log(result);
            util.gridBlock(result,$('body'));
            
            function changeBlock(data,idx,target){
                
                for(i=0; i<=idx.length-1; i++) {
                    var idx1 = idx[i][0];
                    var idx2 = idx[i][1];
                    result[idx1][idx2] = data[i]
                    //console.log(idx1+","+idx2)  
                    
                }
                //console.log(result)
                return target;
            }
            
        }
        
        result.right = function(){
            var left = parseInt(result.css('left').replace('px',''));
            console.log(left)
            result.css('left',left+20+'px');
            
        }
        result.left = function(){
            var left = parseInt(result.css('left').replace('px',''));
            console.log(left)
            result.css('left',left-20+'px');
            
        }
        
        
        
        var keyEvent = function(){
            $(document).on('keydown',function(e){
                var movePX = 20;
                if(e.keyCode == 39) {
                    console.log ( 'right');
                    result.right();
                } else if(e.keyCode == 37){
                     console.log ( 'left');
                    result.left();        
                } else if(e.keyCode == 38) {
                    console.log ( 'up');
                    result.up();   
                } else {
                    console.log(e.keyCode)
                }

            })
        }
        if(!util.keyRun) keyEvent();
        util.keyRun = true;
        return result;
    }
}


