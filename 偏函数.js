/*
 偏函数

 一个创建函数的工厂函数；
 通过指定部分参数，定制新的函数；
 */
var say =function(name){
    return function(text){
        console.log(name+' say '+text);
    }
};
var tomSay = say('tom');

tomSay ('hello');


/*
 高阶函数

 函数作为参数；
 函数作为返回值；

 */

function test(a,b){
    return function(){
        return a+b;
    }
}

