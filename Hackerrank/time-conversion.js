/*
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
    var AMPM, times;

    AMPM = s.slice(8);
    s = s.slice(0, -2);
    times = s.split(':');

    if (AMPM === 'AM'){    
        if (times[0] === '12'){
            times[0] = '00';
        }

        times = times.join(':');

    } else if (AMPM === 'PM' && times[0] < 12) {    
        times[0] = parseInt(times[0]) + 12 ;
        times = times.join(':');
    } else {
        times = times.join(':')
    }

    return times;
}

var militaryTime = timeConversion('12:45:54PM')
console.log(militaryTime);