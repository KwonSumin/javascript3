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
        acceptAction.push(...['buttonA','buttonB','buttonC','buttonD']);
        acceptAction.push(...['pause','start']);
        var hadItem = acceptAction.indexOf(action) != -1;
        if( !hadItem ) {console.log(acceptAction);throw new Error('키설정 오류');}
        keyboard.set(keyCode,action);
        
    }
    
    
    function changeScreen(){
        
    }
    
    function actionCtrl(key){
        var game = emul.rom;
        var action = game.keyboard.get(key);
        game.controll(action);
    }
            
    
    function setKeyEvent(){
        if(keyboard.size <= 0) throw new Error('키설정부터 진행 해주세요.');
        if(emul.rom == null) throw new Error('게임 로드실패');
        $(document).on('keydown input',function(e){
            //TODO : setting keyEvent
                            //return : ex) up left buttonA ...
            var action = keyboard.get(e.keyCode);
            var hadAction = action != null;
            if( hadAction ) {
                console.log(action);
                emul.rom.controll(action);
            } else {console.log(e.keyCode)}
            
        })
    }
    test();
    function test(){
        emul.setKeyboard('up',38);
        emul.setKeyboard('down',40);
        emul.setKeyboard('left',37);
        emul.setKeyboard('right',39);
        emul.setKeyboard('buttonA',81);
        emul.setKeyboard('buttonB',87);
        emul.setKeyboard('buttonC',65);
        emul.setKeyboard('buttonD',83);
        emul.setKeyboard('pause',80);
        emul.setKeyboard('start',49);
        
        emul.setRom(new GameRom());
        setKeyEvent();
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
    this.screen;
    this.eventTargets = [];
    var rom = this;
    
    
    this.getScreen = {
        main : function(){
            var screen = $('<div>').css({
                
            });
            rom.eventTargets = [];
            var mainMenu = [
            '1. 기본설정',
            '2. 종료'
            ];
            var list = $('<ul>');
            for(i=0;i<=mainMenu.length-1;i++) {
                var menu = $('<li>').css({
                    width : '100%',
                    height : '25%',
                    border : '1px solid black'
                }).attr({
                    
                });
                list.append(menu.html(mainMenu[i]));
                rom.eventTargets.push(menu);
                
                
                
            }
            screen.append(list);
            this.screen = 'main';
            return screen;
        },
        defaultSetting : function(){
            
        }
    }
    
    
    
    
    this.controll = function(action){
        
        
        function main(){
            
        }
    }
    
    
    function action(key){
        var screen = rom.screen;
        
        
        function event(){
            if(screen == 'main') {
                var accept = ['up','down','buttonA'];
                var action = [
                    function(){//up
                        
                    },
                    function(){//down
                        
                    },
                    function(){//buttonA
                        
                    }
                ]
            }
        }
        
    }
    
}