/*
*   @author : sumin
*   @version : 1.0.0
*   @since : 2017. 11. 24
*   @discription :  
*       개발중 공통적으로 사용될만한 함수들
*   @needLib : jquery
*/

/*
 * @param : 
 *  target - 데이터 입력할 Object
 *  data - 입력할 데이터 Object
 * @discription : 
 *  리턴값은 target이지만 리턴을 받지않더라도
 *  해당 타겟오브젝트에 데이터 입력됨. (같은필드명 map과 같은 덮어쓰기 방식)
 *  ex )target = data 로하게되면 target을 참조하던 변수
 *  들과 다른주소를 가르키므로 이를 방지하고자 할때 사용
 * @필요lib : ExceptionUtil
 */
function putData(target,data){
    checkError.isObject(target,data); //파라미터 오브젝트가 아닐시 오류 발생.
    var keys = Object.keys(data);
    for(var i=0;i<=keys.length-1;i++)
        target[keys[i]] = data[keys[i]];
    return target;
}
//target에 키,값 을 data내용으로 변경
function changeData(target,data){
    checkError.isObject(target,data); //파라미터 오브젝트가 아닐시 오류 발생.
    var keys = Object.keys(target);
    for(var i=0;i<=keys.length-1;i++) {
        if(Object.keys(data).indexOf(keys[i]) != -1)
            target[keys[i]] = data[keys[i]];
        else 
            delete target[keys[i]];
    }
        
    return target;
}
/*
 * @param : 
 *   window 변수 - variable, value 
 *   Object 변수 - key,value,ref
 */
function changeVal(key,value,ref){
    var ref = ref || window;
    ref[key] = value;
    return value;
}


