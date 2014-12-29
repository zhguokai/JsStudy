/**
 * 学习类型、值、变量
 * Created by zhgk on 14-12-21.
 */
/**
Math.pow(2, 3);
console.log(Math.pow(2, 3));
console.log(Math.round(.6));
console.log(Math.ceil(.6));
console.log(Math.floor(.6));
console.log(Math.abs(-5));
console.log(Math.max(2, 3, 4, 8));
console.log(Math.min(2, 3, 8, 9, 0));
console.log(Math.random());
console.log(Math.PI);
console.log(Math.E);
console.log(Math.sqrt(3));
console.log(Math.pow(2, 1 / 3));
console.log(Math.sin(0));
console.log(Math.log(100));
console.log(Math.log(512));
console.log(Math.exp(3));
console.log(Infinity);
console.log(Number.MAX_VALUE);

console.log(1 / 10);

**/

/*****
    Variable Scope 变量生命周期
*************/
/**
//定义全局变量
var scope = "global";
var checkscope = function() {
	//定义局部变量scope
	var scope = "local";
	return scope;
}
var result = checkscope();
console.log(result);
console.log(scope);
**/
/***
    定义全局变量的时候可以不使用Var声明，
    但是定义局部变量时，必须使用var声明

**/
/**
scope = "global";

var checkscope2 = function() {
	scope = "local";
	myscope = "local";
	return [scope, myscope];
}
checkscope2();
scope
myscope
console.log(checkscope2());
console.log(scope);
console.log(myscope);
**/
/**
*  fucntion definitions can be nested,
    each function has it's own local scope,
    So it is possiable to have server nested
    layers of scope

**/
/**
var scope = "global scope";
var checkscope = function() {
	var scope = "localscop";
	var nested = function() {
		var scope = "nested scope";
		return scope;
	};
	return nested();
}

console.log(checkscope());
console.log(scope);
***/

/**
 * Function Scope and Hoisting
 */
/***
var test = function(o) {
	var i = o;
	if (typeof o == "object") {
		var j = 0;
		for (var k = 0; k < 10; k++) {
			console.log(k);
		}
		console.log(k)
	}
	console.log(j);
}

var tt = new Date();
test(tt);
console.log(typeof tt);
***/

/**
    fucntion scope hosting
    函数生命周期提升
***/
/***
var scope = "global";
var f = function() {
	// if next line is not var scope this will print "gloable"
	console.log(scope)

	//but var scope is declared,the above scope will has function scope

	//the above is only declared,can't find global scope

	var scope = "local";
	//this initialized here
	console.log(scope);
};
f();

***/
/**
    Variables As Properties
    属性变量
**/

/**
 
 ***/

var truevar = 1; //A properly declared global variable nondeletable
fakevar = 2; // Create a deletable property of the gloabl object
this.fakevar2 = 3; //this is done the same thing,this is gloabl object
delete truevar; //false 
delete fakevar;
delete this.fakevar2;
console.log(truevar);
console.log(fakevar2); //报错,fakevar2 is not defined