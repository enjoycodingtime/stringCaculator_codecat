/**
 * Created by zk on 14-11-27.
 */
function DeleteRepeat() {

};
DeleteRepeat.prototype.f = function(input){
    var length = input.length;
    var obj={};
    for (var i = 0;i<length;i++){
        if(obj[input[i]]){
            input.splice(i,1);
        }
        obj[input[i]] = input[i];
    }
    return input;
//  return _.union(input);
};