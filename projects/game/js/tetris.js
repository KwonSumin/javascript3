

var Tetris = function(){
    var hasNeedDebug = true;
    this.hasNeedDebug = false;
    this.debugPrint = function(str){
        if(this.hasNeedDebug) {
            console.log(str);
        }
    }
    
    
    this.pressKey = function(key) {
        this.debugPrint('게임 인터페이스 : ' + buttonInfo[key]);
    }
    
    this.blocks = {
        block1 : 
        [
            [0, 0, 0],
            [0, 1, 1],
            [0, 1, 1]
        ],
        block2 :
        [
            [0, 0, 0],
            [1, 1, 1],
            [0, 0, 1]
        ]
    }
    
    
    
    
    
}


