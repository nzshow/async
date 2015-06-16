/*
* doWhilst(fn, test, callback)
* 相当于do…while,较whilst而言，doWhilst交换了fn,test的参数位置，先执行一次循环，再做test判断。*/
var async=require('async');
var count = 0;
async.doWhilst(
    function (callback) {
        count++;
        console.log(count);
        setTimeout(callback, 1000);
    },
    function () { return count < 5; },
    function (err) {
       // console.error(err)
    }
);