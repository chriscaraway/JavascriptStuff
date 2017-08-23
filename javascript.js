function squareNumber(num) {
    var squaredNumber = num * num;
    console.log('The square of the number ' + num + ' is ' + squaredNumber);
    return squaredNumber;
}

squareNumber(3);
squareNumber(6);
squareNumber(9);

function halfOf(num) {
    var half = num / 2;
    console.log('Half of ' + num + ' is ' +  half);
    return half;
}

halfOf(5);
halfOf(10);
halfOf(20);

function percentOf(num1, num2) {
    var percent = (num1/num2) * 100;
    console.log(num1 + ' is ' + percent + '% of ' + num2);
    return percent;
}

percentOf(5, 10);
percentOf(10, 20);
percentOf(20, 50);

function areaOfCircle(radius) {
    var area = Math.PI * squareNumber(radius);
    console.log('The area of circle with radius ' + radius + ' is ' + area);
    return area;
}

areaOfCircle(2);
areaOfCircle(4);
areaOfCircle(8);

function doMath(num) {
    var half    = halfOf(num);
    var squared = squareNumber(half);
    var area    = areaOfCircle(squared);
    var result  = percentOf(squared, area);
}

doMath(5);
doMath(10);
doMath(20);
