/*
* iterator(tasks)
* 将一组函数包装成为一个iterator，可通过next()得到以下一个函数为起点的新的iterator。该函数通常由async在内部使用，但如果需要时，也可在我们的代码中使用它。
* 直接调用()，会执行当前函数，并返回一个由下个函数为起点的新的iterator。调用next()，不会执行当前函数，直接返回由下个函数为起点的新iterator。
* 对于同一个iterator，多次调用next()，不会影响自己。如果只剩下一个元素，调用next()会返回null。*/

var async=require('async');
var iter = async.iterator([
    function() { console.log('111') },
    function() { console.log('222') },
    function() { console.log('333') }
]);
iter();
//console.log(iter());
//console.log(iter.next());