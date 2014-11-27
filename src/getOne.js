/**
 * Created by zk on 14-11-26.
 */
function GetOne() {

};
GetOne.prototype.caculate = function (input) {
    var sum = 0;
    while(input !==1){
        if(input %2 !==0){
            input -=1;
            sum ++;
        }
        input = input/2;
        sum ++;
    }
    return sum;
};