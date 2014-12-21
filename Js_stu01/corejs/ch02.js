/**
 * Created by zhgk on 14-12-21.
 */

//无需分号的情况
var a = 0
var b = 0
//需要分号的情况
var a = 3;b = 3;

//行结束符不作为;
var
    a
        =
        6
console.log(a);

//行结束符作为;

var getWidth = function () {
    //语句解析为return ; true
    return
    true
    //语句解析为return true
    return true;
};

var getHeight = function () {
    var x = 1
    var y = 6

    //解析为x;++y
    x
    ++
        y
    console.log(x)
    console.log(y)
    //解析为x++;y
    x++
    y
    console.log(x);
    console.log(y);
};

getHeight();

