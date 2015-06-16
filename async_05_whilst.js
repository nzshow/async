/*
* whilst(test, fn, callback)
* 用可于异步调用的while
* 相当于while，但其中的异步调用将在完成后才会进行下一次循环。当你需要循环异步的操作的时候，它可以帮助你
* test参数是一个返回布尔值结果的函数，通过返回值来决定循环是否继续，作用等同于while循环停止的条件。
* fn参数就是我们要异步执行的作业，每次fn执行完毕后才会进入下一次循环。*/
var async=require('async');
/*var count = 0;
async.whilst(
    function () { return count < 5; },
    function (callback) {
        count++;
        console.log(count);
        setTimeout(callback, 1000);
    },
    function (err) {
        console.error(err)
    }
);*/

var list = [{name:'Jack',age:20},{name:'Lucy',age:18}];
async.whilst(
    function () { return list.length!='' },
    function () {
        for(var i=0;i<list.length;i++){
            list[i].age+=1;
        }
        console.log(list)
    },
    function (err) {
        console.error(err)
    }
);