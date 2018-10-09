function plusMinus(arr) {
    let positive, negative, zero;
    let posArr = [];
    let negArr = [];
    let zeroArr = [];
    arr.forEach(function (current) {
        current > 0 ? posArr.push(current) : current < 0 ? negArr.push(current) : current === 0 ? zeroArr.push(current) : console.log('error, wrong input type')
    });
    positive = function () {
        var sum = arrSum(posArr);
        return sum / arr.length;
    }
    negative = function () {
        var sum = arrSum(negArr)
        return sum / arr.length;
    }
    zero = function () {
        var sum = arrSum(zeroArr)
        return sum / arr.length;
    }

    return {
        positive: positive(),
        negative: negative(),
        zero: zero()
    }
}

function arrSum(ar) {
    let amount = 0;
    ar.forEach(function (current) {
        amount += 1;
    });
    return amount;
}