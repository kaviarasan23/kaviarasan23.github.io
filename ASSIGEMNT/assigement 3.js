console.clear()
arr=[23,12,9,2,-3,5,-1]

function maxMinAvg(arr) {
    var max = arr[0];
    var Min = arr[0];
    var Avg = arr[0]; 
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < Min) {
            Min = arr[i];
        }
        Avg = Avg + arr[i];
    }
    return [max, Min, Avg/arr.length]; 
}

var parameter = maxMinAvg(arr);

console.log(parameter);
