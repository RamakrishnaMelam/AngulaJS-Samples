
function calculateAllSequence(number) {
    var result = '';
    for (var i = 1; i <= number; i++) {
        if (i == number)
            result += number;
        else
            result += i + ', ';
    }
    return result.replace(/,\s*$/, "");;
}

function calculateAllOddSequence(number) {
    var result = '';
    for (var i = 1; i <= number; i++) {
        if (i == number) {
            if (Math.abs(i % 2) == 1)
                result += i;
        } else {
            if (Math.abs(i % 2) == 1)
                result += i + ', ';
        }
    }
    if (result.length > 1) {
        var check = result.trim().slice(-1);
        if (check == ',')
            result = result.substr(0, result.length - 1);
    }

    return result.replace(/,\s*$/, "");;
}

function calculateAllEvenSequence(number) {
    var result = '';
    for (var i = 2; i <= number; i++) {
        if (i == number) {
            if (i % 2 == 0)
                result += i;
        } else {
            if (i % 2 == 0)
                result += i + ', ';
        }
    }
    if (result.length > 1) {
        var check = result.trim().slice(-1);
        if (check == ',')
            result = result.substr(0, result.length - 1);
    }
    return result.replace(/,\s*$/, "");;
}

function calculateAllSpecialSequence(number) {
    var result = '';
    for (var i = 1; i <= number; i++) {
        if (i == number) {
            if (i % 3 == 0) {
                if (i % 5 == 0)
                    result += 'Z';
                else
                    result += 'C';
            } else if (i % 5 == 0)
                result += 'E';
            else
                result += i;
        } else {
            if (i % 3 == 0) {
                if (i % 5 == 0)
                    result += 'Z' + ', ';
                else
                    result += 'C' + ', ';
            } else if (i % 5 == 0)
                result += 'E' + ', ';
            else
                result += i + ', ';
        }
    }

    if (result.length > 1) {
        var check = result.trim().slice(-1);
        if (check === ',')
            result = result.substr(0, result.length - 1);
    }

    return result.replace(/,\s*$/, "");;
}

function calculateFibonacciSequence(number) {
    var a = 0,
        b = 1,
        f = 1;
    var result = '';
    if (number > 0) {
        for (var i = 2; i <= number; i++) {
            if (b <= number && (a + b) <= number) {
                result = result + b + ', ';
                f = a + b;
                a = b;
                b = f;
            }
        }
        result = result + b;
    }
    return result.replace(/,\s*$/, "");;
}