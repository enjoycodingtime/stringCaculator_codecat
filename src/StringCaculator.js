/**
 * Created by zk on 14-11-24.
 */
function StringCaculator() {

};
StringCaculator.prototype.add = function () {
    var length = arguments.length;
    var sum = 0;
    for (var i = 0; i < length; i++) {
        sum += parseInt(arguments[i]);
    }
    ;
    return sum;
};