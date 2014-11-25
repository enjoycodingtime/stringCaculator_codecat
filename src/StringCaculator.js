/**
 * Created by zk on 14-11-24.
 */
function StringCaculator() {

};
StringCaculator.prototype.add = function () {
    var sum = 0;
    var string = _.toArray(arguments[0]);
    for (var i = 0; i < string.length; i++) {
        if((string[i]) ==='-'){
            return 'negatives not allowed';
        }
        if (parseInt(string[i])) {
            while (parseInt(string[i + 1])||parseInt(string[i + 1]) ==0) {
                string[i + 1] = string[i] + string[i + 1];
                i++;
            }
            ;
        }
        if (parseInt(string[i])&& parseInt(string[i])<1000) {
            sum += parseInt(string[i]);
        }

    }
    ;
    return sum;
};