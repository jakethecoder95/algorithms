var staircase = function(num) {
    for( var i = 1; i <= num; i++) {
        var spaces = ' '.repeat(num - i);
        var hashes = '#'.repeat(i);

        console.log(spaces + hashes);
    }
}

staircase(8);