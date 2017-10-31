var Emulator = function (){
    var time; //경과시간
    var score; //점수
    var isStart = false;
    var isAction = false;
    var isGameLoad = false;
    this.hasNeedDebug = false;
    this.debugPrint = function(str){
        if(this.hasNeedDebug) {
            var stack = new Error().stack;
            stack = stack.split('\n');
            console.log(stack[2]);
            console.log(str);
        }
    }
    /* init members */
    this.UI = {};
    var emul = this;
    
    //setting
    this.game = {};
    this.actionButton = function(button,game){
        this.debugPrint(button);
        this.debugPrint(this.game);
        if(this.isGameLoad)
            this.game.pressKey(button[1]);
    }
    this.startKeyEvent = function(){
        $(document).on("keydown",function(e){
            
            var values = Object.values(emul.UI.keyboard);
            var key = e.keyCode;
            for(i=0; i<=values.length-1 ;i++) {
                if( values[i][0]==key ) {
                    emul.actionButton(values[i])
                    return false;
                }
            }
            if(e.keyCode == 72){
                emul.debugPrint(this);
            } else {
                emul.debugPrint(e.keyCode)
            }
        });
    }
    
    
    //listener
    this.onInitialize = function(){};
    this.onStart = function(){};
    this.onPauseOrAction = function(){};
    this.onGameLoad = function(){};
    
    
    this.initialize = function(ui){
        this.onInitialize();
        try{
            this.UI = ui;
            
            if(ui.type != 'EmulatorUI') throw new Error("파라미터 오류");
        }catch(e){
            console.error(e);
            console.error("파라미터 오류");
        }
    }
    
    this.start = function(){
        //if(!isStart) throw new Error("초기설정 되지 않았습니다.");
        this.debugPrint("start")
        this.debugPrint(this.UI);
        this.debugPrint(this.game);
        this.startKeyEvent();
    }
    
    this.pauseOrAction = function(){
        this.onPauseOrAction();
        if(isAction) isAction = false; else isaction = true;
    }
    
    this.gameLoad =  function(game){
        this.game = game;
        this.isGameLoad = true;
    }
    
    
}

