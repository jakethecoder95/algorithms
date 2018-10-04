let displayPercentages = function(array) {

    var fields = document.querySelectorAll(DOMstrings.expensesPercLabel);

    var nodeListForEach = function (list, callback) {
        for (var i = 0; i < list.length; i++) {
            callback(list[i], i)
        }
    }


    nodeListForEach(fields, function (current, index) {
        if (array[index] > 0) {
            current.textContent = array[index] + '%';
        } else {
            current.textContent = '---';
        }

    });

}
