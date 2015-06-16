/*
* until(test, fn, callback)
* 与while相似，但判断条件相反
* until与whilst正好相反，当test条件函数返回值为false时继续循环，与true时跳出。其它特性一致。*/
var async=require('async');
var count = 5;
async.until(
    function () { return count < 0; },
    function (callback) {
        console.log(count);
        count--;
        setTimeout(callback, 1000);
    },
    function (err) {
        //console.error(err)
    }
);