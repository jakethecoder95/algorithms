var changeCounter = function(change) {
    change = change * 100;
    scaledChange = change % 25;
    console.log
    var pennies = scaledChange % 5;
    var nickles = (scaledChange - pennies) / 5;
    if (nickles % 2 === 0) {
        var dimes = nickles / 2;
        nickles = 0;
    } else {
        var dimes = (nickles - 1) / 2;
        nickles -= (nickles - 1);
    }
    var quarters = (change - scaledChange) / 25

    console.log('penies: ' + pennies);
    console.log('nickles: ' + nickles);
    console.log('dimes: ' + dimes);
    console.log('quarters: ' + quarters);
}