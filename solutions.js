
function multJacksonBates(n) {
    n = n - 1;
    var sum = 0;
    for (n; n >= 1; n--) {
        (n % 3 == 0 || n % 5 == 0) ? sum += n : null;
    }
    return sum;
}
function multkevcomedia(n) {
    function series(d) {
        let terms = Math.floor((n - 1) / d);
        return terms * (1 + terms) * d / 2;
    }
    return series(3) + series(5) - series(15);
}

function multSalasy(num) {
    var rangeArray = [];
    for (var i = 1; i < num; i++) {
        if (i % 3 === 0 || i % 5 === 0)
            rangeArray.push(i);
    }
    //console.log(rangeArray);
    var sum = rangeArray.reduce(function (p, v) {
        return p + v;
    });
    //console.log(sum);
    /* added return */
    return sum;
}

function multnickolaos77(n) {
    //var n = Number(n) - 0.1;     the Number function consumes a lot of time
    n = n - 0.1;
    var maxThree = Math.floor(n / 3);
    var SumOfThrees = maxThree * 0.5 * (3 + maxThree * 3);
    var maxFive = Math.floor(n / 5);
    var SumOfFives = maxFive * 0.5 * (5 + maxFive * 5);
    var maxFifteen = Math.floor(n / 15);
    var SumOfFiftenns = maxFifteen * 0.5 * (15 + maxFifteen * 15);
    var answer = SumOfThrees + SumOfFives - SumOfFiftenns;
    return answer;
};

function multMichealhall(val) {
    var value = val - 1;
    var output_value = 0;
    while (value > 2) {
        if (value % 3 === 0 || value % 5 === 0)
            output_value += value;
        value--;
    }
    return output_value;
}

function multDarklake(n) {
    let sum = 0;
    while (--n) {
        n % 3 === 0 || n % 5 === 0 ? sum += n : null;
    }
    return sum;
}

function multBenGitter(max) {
    var sum = 0;

    for (var i = 0; i <= (max - 1) / 3; i++) {
        sum += 3 * i;
    }
    for (var j = 0; j <= (max - 1) / 5; j++) {
        if (!(5 * j % 3 === 0)) {
            sum += 5 * j;
        }
    }

    return sum;
}

/* Renamed from multX to multjv88899 */
function multjv88899(number) {
    var numbersHolder = [];

    for (var i = 0; i < number; i++) {
        if (i % 3 === 0 && i !== 0) {
            numbersHolder.push(i);
        } else if (i % 5 === 0 && i !== 0) {
            numbersHolder.push(i);
        }
    }

    var totalValue = numbersHolder.reduce(function (total, num) {
        return total + num;
    });

    return totalValue;

}

function multsimmco(num) {
    var sum = 0;
    for (i = 0; i < num; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
}

function multJohnL3(num) {

    var res = 0,
        top = Math.round(num / 5);

    for (var x = 1; (x * 3) < num; x++) {
        res += x * 3;

        if (!((x * 5) % 3 === 0) && x < top) res += x * 5;
    }

    return res;
}

function multForesterr(x) {
    var nFive = ((x - 1) / 5) | 0,
        nThree = ((x - 1) / 3) | 0,
        nFifteen = ((x - 1) / 15) | 0;
    return 3 * nThree * (nThree + 1) / 2 +
        5 * nFive * (nFive + 1) / 2 -
        15 * nFifteen * (nFifteen + 1) / 2;
}

/* renamed to multFrustrated_Coder */
function multFrustrated_Coder(n) {
    var sum = 0, i;
    for (i = 2; i < n; i++) {

        if ((i % 3 == 0) || (i % 5 == 0))
            sum += i;

    }
    return sum;
}

function multcomputerluca(n) {

    var sum = Array.from(Array(n).keys()).filter((a) => {
        if (a % 3 === 0 || a % 5 === 0) {
            return true;
        }
    })
        .reduce((a, b) => {
            return a + b;
        }, 0);
    return sum;
}

function multbrew95(N) {
    var sumN = 0;
    for (var j = 1; j < N; j++) {
        if (j % 3 === 0 || j % 5 === 0) {
            sumN += j;
        } //end if
    } // endfor 
    return sumN;
} //end function

function multthanhacun(times) {

    //sum of multiple of 3 + sum of multiple of 5 - sum of multiple of 15
    //using the same formular
    const sumMult = (mult, limit = times - 1) => (limit - limit % mult) * ((limit - limit % mult) / mult + 1) / 2;
    return sumMult(3) + sumMult(5) - sumMult(15);

}

function multVelenir(n) {
    --n;

    let pow = ~~(n / 3);
    // for numbers > 2^31-1 better use Math.floor()
    let sum = 3 * pow * (pow + 1) / 2;

    pow = ~~(n / 5);
    sum += 5 * pow * (pow + 1) / 2;

    pow = ~~(n / 15);
    sum -= 15 * pow * (pow + 1) / 2;

    return sum;

}

function multslocodemonkey(num) {
    var result = 0;
    for (i = 0; i < num; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            result += i;
        }
    }
    return result;
}

function multIdyR17(n = 1) {
    return Array.from(new Array(Math.abs(n)), (x, i) => i).filter((number) => (number % 3 == 0 || number % 5 == 0)).reduce((a, b) => a + b) * (n < 0 ? -1 : 1);

    //Explanation: Returns the Sum of elements in an newly produced Array from 0 to n that filters the multiples of 3 and 5. Also works with negative values of n. If testing for negative n was not needed, substitute "Math.abs(n)" for "n" and remove "*(n<0?-1:1)"
}

function multOmegga(n) {
    let l = [];

    for (let i = 3; i < n; i = i + 3) {
        l.push(i);
    }

    for (let i = 5; i < n; i = i + 5) {
        if (l.indexOf(i) === -1) l.push(i);
    }

    return l.reduce((a, b) => a + b);
}

function multGSquirrel(upperLimit) {
    var sumOfMultiples = function (commonFactor, upperLimit) {
        var noOfMultiples = Math.floor((upperLimit - 1) / commonFactor);
        return commonFactor * noOfMultiples * (noOfMultiples + 1) / 2;
    };
    return sumOfMultiples(3, upperLimit) + sumOfMultiples(5, upperLimit) - sumOfMultiples(15, upperLimit);
}

/* renamed from sumUp to multimtoobose */
var multimtoobose = (n) => (((Math.floor((n - 1) / 3) / 2) * (6 + (Math.floor((n - 1) / 3) - 1) * 3)) + ((Math.floor((n - 1) / 5) / 2) * (10 + (Math.floor((n - 1) / 5) - 1) * 5)) - ((Math.floor((n - 1) / 15) / 2) * (30 + (Math.floor((n - 1) / 15) - 1) * 15)));

function multBwellis00(num) {

    function divBy(num, by) {
        if (num % by == 0) return true;
    }

    total = 0;

    for (i = 1; i < num; i++) {

        if (divBy(i, 3) || divBy(i, 5)) total = total + i;

    }
    return total;

}
function multvector2016(f) {
    var a_3 = 3;
    var a_5 = 5;
    var a_15 = 15;

    var n_3 = Math.floor((f - 1) / a_3);
    var n_5 = Math.floor((f - 1) / a_5);
    var n_15 = Math.floor((f - 1) / a_15);

    var sum_3 = ((n_3 / 2) * ((a_3 << 1) + (n_3 - 1) * a_3));
    var sum_5 = ((n_5 / 2) * ((a_5 << 1) + (n_5 - 1) * a_5));
    var sum_15 = ((n_15 / 2) * ((a_15 << 1) + (n_15 - 1) * a_15));


    return (sum_3 + sum_5) - sum_15;
}

function multIsaacAbrahamson(max) {
    var multiples = [3, 5], multiplee = 1;

    while (3 * ++multiplee < max || 5 * ++multiplee < max) {
        if (3 * multiplee < max && !multiples.includes(3 * multiplee)) multiples.push(3 * multiplee);
        if (5 * multiplee < max && !multiples.includes(5 * multiplee)) multiples.push(5 * multiplee);
    }

    return multiples.reduce((acc, cur) => acc + cur, 0); //reduce code from mdn
}

/* renamed from multpiles to multGouldie */
function multGouldie(n) {
    let total = 0
    for (let i = 3; i < n; i++) {
        (i % 3 === 0 || i % 5 === 0) && (total += i)
    }
    return total
}

function multTattomoosa(n) {
    n -= 1;
    var sum = 0,
        d3 = Math.floor(n / 3),
        d5 = Math.floor(n / 5),
        d15 = Math.floor(n / 15);

    sum = (d3 / 2 * (3 + d3 * 3)) +
        (d5 / 2 * (5 + d5 * 5)) -
        (d15 / 2 * (15 + d15 * 15));

    return sum;
}


/* moved arrSum2 inside function so solution could
   be exported for testing */

function multHyperSprite(num) {
    var tempObj = {};
    function arrSum2(arr) {
        var result = 0;
        for (let i = 0, l = arr.length; i < l; i++) {
            result += arr[i] * 1;
        }
        return result;
    }
    for (var i = 0; i < num; ++i) {
        if (i % 3 === 0 || i % 5 === 0) {
            tempObj[i] = true;
        }
    }
    return arrSum2(Object.keys(tempObj));
}

/* renamed to multtsaulon from getMulSum */
function multtsaulon(num) {
    var sum = 0

    for (var i = 1; i < num; i++) {
        sum += (i % 3 == 0 || i % 5 == 0) ? i : 0;
    }

    return sum;
}

function multJasil1414(N) {
    var sum = 0;
    for (var i = 0; i < N; i++) {
        if ((i % 3 === 0 && i % 5 === 0) || (i % 3 === 0 || i % 5 === 0)) {
            sum += i;
        }
    }
    return sum;
}

function multBLK1010(upperLimit) {
    var finalOutput = 0;
    var currentNumber = 1;

    while (currentNumber < upperLimit) {
        if (currentNumber % 3 === 0 || currentNumber % 5 === 0) {
            finalOutput += currentNumber;
        }
        currentNumber++;
    }
    return finalOutput;
}

/* rnamed multpkmn9060 from sumOfBelow */
function multpkmn9060(n) {
    var sum = 0;
    for (var i = n - 1; i > 0; i--) {
        if (i % 3 == 0 || i % 5 == 0) {
            sum += i;
        }
    }
    return sum;
}

function multnawazishali(num) {
    var numArr = [];

    for (var i = 0; i < num; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            numArr.push(i);
        }
    }

    return numArr.reduce(function (total, number) {
        return total + number;
    });
}

function multNp463(num) {
    var sum = 0;
    for (var i = 1; i < num; i++) {
        if (i % 3 == 0 || i % 5 == 0) sum += i;
    }
    return sum;
}

function multYankeeDK(n) {
    var k1 = Math.floor((n - 1) / 3);
    var k2 = Math.floor((n - 1) / 5);
    var k3 = Math.floor((n - 1) / 15);
    return (k1 * (k1 + 1) * 3 + k2 * (k2 + 1) * 5 - k3 * (k3 + 1) * 15) / 2;
}

function multMistaTwist(n) {
    return [...Array(n).keys()].filter(a => a % 3 === 0 || a % 5 === 0).reduce((a, b) => a + b, 0);
}

function multa402539(N) {
    var nm = --N;
    var n3 = (nm - nm % 3) / 3, n5 = (nm - nm % 5) / 5, n15 = (nm - nm % 15) / 15;
    return (3 * n3 * (n3 + 1) + 5 * n5 * (n5 + 1) - 15 * n15 * (n15 + 1)) / 2;
}

function multTsvetkovT(times) {
    var newArr = [];
    for (var i = 3; i < times; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            newArr.push(i);
        }
    }
    var sum = newArr.reduce((a, b) => a + b, 0);
    return sum;

}

function multShanthiKarunakaran(times) {
    var total = 0;
    while (times > 1) {
        times--;
        if (times % 3 == 0 || times % 5 == 0) {
            total += times;
        }
    }
    return total;
}

function multZackWard(n) {

    let sum = 0;

    // First, add all multiples of 3
    let x = 1;
    while (x * 3 < n) {
        sum = sum + (x * 3);
        x++;
    }

    // Next, add all multiples of 5
    x = 1;
    while (x * 5 < n) {
        // Only add the number if it isn't also a multiple of 3. In that case, it would have already been added to the sum
        if ((x * 5) % 3 !== 0) {
            sum = sum + (x * 5);
        }
        x++;
    }

    return sum;
}

function multjoelpeyton(num) {
    var arr = [];
    var i = 1;
    while (i < num) {
        if (i % 3 == 0 || i % 5 == 0) {
            arr.push(i)
        }
        i++;
    }

    var totSum = arr.reduce(function (previousValue, currentValue) {
        return previousValue + currentValue;
    });

    return totSum;
}

/* renamed to multLee182 */
function multLee182(n) {
    var sum = 0
    var pattern = [3, 2, 1, 3, 1, 2, 3]
    var i = 0
    var j = 0
    const l = pattern.length
    while (i < n) {
        i += pattern[j]
        sum += i
        j++
        if (j === l) { j = 0 }
    }
    return sum - i
}

function multAnourian(n) {
    function calc(value, number) {
        var sum = 0;
        if (value > 1) {
            sum = value * (number + (value * number)) / 2;
        } else if (value === 1) {
            sum = number;
        }
        return sum;
    }
    return calc(Math.floor((n - 1) / 3), 3) + calc(Math.floor((n - 1) / 5), 5) - calc(Math.floor((n - 1) / 15), 15);
}

function multIronPike(n) {
    --n;
    var n3 = Math.floor(n / 3);
    var n5 = Math.floor(n / 5);
    var n15 = Math.floor(n5 / 3);
    var s3m2 = 3 * n3 * (n3 + 1);
    var s5m2 = 5 * n5 * (n5 + 1);
    var s15m2 = 15 * n15 * (n15 + 1);
    return (s3m2 + s5m2 - s15m2) / 2;
}

function multayiemba(N) {
    var sum = 0;
    for (var i = 3; i < N; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;

        }
    }
    return sum;
}

function multSabryRagab(N) {
    var a3 = Math.floor((N - 1) / 3);
    var a5 = Math.floor((N - 1) / 5);
    var a15 = Math.floor((N - 1) / 15);

    return 3 * (a3 * (a3 + 1) / 2) + 5 * (a5 * (a5 + 1) / 2) - 15 * (a15 * (a15 + 1) / 2);
}

function multmpontus(times) {
    let prods = [];
    for (let i = 1; ; i++) {
        let mult = 3 * i;
        if (mult >= times) {
            break;
        }
        if (prods[mult] === undefined) {
            prods[mult] = true;
        }
    }
    for (let i = 1; ; i++) {
        let mult = 5 * i;
        if (mult >= times) {
            break;
        }
        if (prods[mult] === undefined) {
            prods[mult] = true;
        }
    }
    return Object.keys(prods).reduce((a, b) => {
        return a + parseInt(b);
    }, 0);
}

/* renamed to multsilgarth from mult */
function multsilgarth(N) {
    var threes = Math.floor(--N / 3);
    var fives = Math.floor(N / 5);
    var fifteen = Math.floor(N / 15);

    return (3 * threes * (threes + 1) + 5 * fives * (fives + 1) - 15 * fifteen * (fifteen + 1)) / 2;
}

function multanalistamarcio(n) {
    n--;
    if (n == 3) {
        return 3;
    }
    var sum = 0;

    while (n % 5 !== 0) {
        if (n % 3 === 0) {
            sum += n;
        }
        n--;
    }

    var r = (n % 3) + (n % 5);

    for (; n >= 3;) {
        sum += n;
        (r === 0 || r == 4) ? n -= 3 : n -= r;
        r = (n % 3) + (n % 5);
    }

    return sum;
}

function multbhattmayur26(val) {
    return (parseInt((val - 1) / 3) * (3 + ((val - 1) - parseInt((val - 1) % 3))) / 2) + (parseInt((val - 1) / 5) * (5 + ((val - 1) - parseInt((val - 1) % 5))) / 2) - (parseInt((val - 1) / 15) * (15 + ((val - 1) - parseInt((val - 1) % 15))) / 2);
}

function multDavidrfreeman(n) {
    let arr = [];
    for (let i = 1; i < n; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            arr.push(i);
        };
    };
    return arr.reduce((a, b) => a + b, 0);
}

function multEphopper(n) {
    var sum = 0;
    for (var i = 0; i < n; i++) {
        if (i % 3 === 0 || i % 5 === 0)
            sum += i;
    }
    return sum;
}

function multNostalgieCamarade(a) {
    for (i = 3, result = 0; i < a; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            result += i;
            /* commented out console.log */
            // console.log(result);
        }

    }
    return result;
}

/* renamed to multpaulo101977 from multi */
var multpaulo101977 = function (multi) {
    var result = 0;

    for (var i = 1; i < multi; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            result += i;
        }
    }

    return result;
}

function multhit1st(num) {
    var sum = 0;

    for (var i = 1; 3 * i < num; i++) {
        sum += 3 * i;
    }

    for (var j = 1; 5 * j < num; j++) {
        if (5 * j % 3 !== 0) {
            sum += 5 * j;
        }
    }

    return sum;
}

function mult79man(n) {
    var sum = 0;
    for (n--; n >= 1; n--) {
        (n % 3 == 0 || n % 5 == 0) ? sum += n : null;
    }
    return sum;
}

/* renamed multjoshuaalm from multiplesSum
   and copied from repl.it */
function multjoshuaalm(n) {
    var multiples=[];
	var sum = 0;
	for (var i = 0; i <= n; i++) {
		if (i % 3 === 0 || i % 5 === 0) {
			sum += i;
		}
	}
	return sum;
}

module.exports =  { multJacksonBates, 
    multkevcomedia,
    multSalasy,
    multnickolaos77,
    multMichealhall,
    multDarklake,
    multBenGitter,
    multjv88899,
    multsimmco,
    multJohnL3,
    multForesterr,
    multFrustrated_Coder,
    multcomputerluca,
    multbrew95,
    multthanhacun,
    multVelenir,
    multslocodemonkey,
    multIdyR17,
    multOmegga,
    multGSquirrel,
    multimtoobose,
    multvector2016,
    multIsaacAbrahamson,
    multGouldie,
    multTattomoosa,
    multHyperSprite,
    multtsaulon,
    multJasil1414,
    multBLK1010,
    multpkmn9060,
    multnawazishali,
    multNp463,
    multYankeeDK,
    multMistaTwist,
    multa402539,
    multTsvetkovT,
    multShanthiKarunakaran,
    multZackWard,
    multjoelpeyton,
    multLee182,
    multAnourian,
    multIronPike,
    multayiemba,
    multSabryRagab,
    multmpontus,
    multsilgarth,
    multanalistamarcio,
    multbhattmayur26,
    multDavidrfreeman,
    multEphopper,
    multNostalgieCamarade,
    multpaulo101977,
    multhit1st,
    mult79man,
    multjoshuaalm};