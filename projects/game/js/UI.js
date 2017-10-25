const BUTTON_ACTION = {
    UP : 1,
    DOWN : 2,
    LEFT : 3,
    RIGHT : 4,
    START : 5,
    PAUSE : 6,
    BUTTON_A : 7,
    BUTTON_B : 8,
    BUTTON_C : 9,
    BUTTON_D : 10
}

var EmulatorUI = function(){
    this.type = 'EmulatorUI';
    this.keyboard = {
        //[ASCII CODE,ctrlCode,description] 컨트롤러 키 설정.
        up : [38,BUTTON_ACTION.UP,'UP'],
        down : [40,BUTTON_ACTION.DOWN,'DOWN'],
        left : [37,BUTTON_ACTION.LEFT,'LEFT'],
        right : [39,BUTTON_ACTION.RIGHT,'RIGHT'],
        start : [49,BUTTON_ACTION.START,'START'],
        pause : [80,BUTTON_ACTION.PAUSE,'PAUSE'],
        buttonA : [81,BUTTON_ACTION.BUTTON_A,'BUTTON_A'],
        buttonB : [87,BUTTON_ACTION.BUTTON_B,'BUTTON_B'],
        buttonC : [65,BUTTON_ACTION.BUTTON_C,'BUTTON_C'],
        buttonD : [83,BUTTON_ACTION.BUTTON_D,'BUTTON_D']
    }
    
    this.actionButton = function(button){
        console.log(button)
    }
     
    
     
    
    
}