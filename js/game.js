var Game = function(){
    var hasNeedDebug = true;
    this.hasNeedDebug = false;
    this.debugPrint = function(str){
        if(this.hasNeedDebug) {
            console.log(str);
        }
    }
    var buttonInfo = [
        'NONE','UP','DOWN','LEFT','RIGHT','START',
        'PAUSE','BUTTON_A','BUTTON_B','BUTTON_C','BUTTON_D'
     ];
    
    this.pressKey = function(key) {
        this.debugPrint('게임 인터페이스 : ' + buttonInfo[key]);
    }
}