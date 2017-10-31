var Emulator = function(){
    var emul = this;
    //set acii code key
    var keyboard = new Map();
    
    
    //game rom
    this.rom;
    //listener
    this.onLoadRom = function(){};
    this.setRom = function(rom){
        this.rom = rom;
        //TODO : fairLoadRom exceeption.
        this.onLoadRom();
    }
    this.setKeyboard = function(action,keyCode){ //throws Exception
        var acceptAction = ['up','down','right','left'];
        acceptAction.push(['buttonA','buttonB','buttonC','buttonD']);
        acceptAction.push(['pause','start']);
        var hadItem = acceptAction.indexOf(action) != -1;
        if( !hadItem ) throw new Error('키설정 오류');
        this.keyboard.set(keyCode,action);
        
    }
    
    
    function actionCtrl(key){
        var game = emul.rom;
        var action = game.keyboard.get(key);
        game.controll(action);
    }
    setKeyEvent();
    function setKeyEvent(){
        console.log(emul.keyboard);
        if(emul.keyboard == null) throw new Error('키설정부터 진행 해주세요.');
        $(document).on('keydown input',function(e){
            //TODO : setting keyEvent
                            //return : ex) up left buttonA ...
            var action = emul.keyboard.get(e.keyCode);
            var hadAction = action != null;
            if( hadkeyCode ) {
                emul.rom.controll(action);
            }
            
        })
    }
    
}

var GameRom = function(){
    var keyboard = new Map();
    keyboard.set('up',      1);
    keyboard.set('down',    2);
    keyboard.set('left',    3);
    keyboard.set('right',   4);
    keyboard.set('buttonA', 5);
    keyboard.set('buttonB', 6);
    keyboard.set('buttonC', 7);
    keyboard.set('buttonD', 8);
    keyboard.set('pause',   9);
    keyboard.set('start',   0);
    
    this.controll = function(action){
        
    }
    
    
    function action(key){
    
    }
}