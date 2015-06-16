/*
* doUntil(fn, test, callback)
* doUntil与doWhilst正好相反，当test为false时循环，与true时跳出。其它特性一致。*/
var async=require('async');
var count = 5;
async.doUntil(
    function (callback) {
        console.log(count)
        count--;
        setTimeout(callback, 1000);
    },
    function () { return count < 0; },
    function (err) {

    }
);