var staircase = function(n) {
    for( var i = 1; i <= n; i++) {
        var spaces = ' '.repeat(n - i);
        var hashes = '#'.repeat(i);

        console.log(spaces + hashes);
    }
}

staircase(8);