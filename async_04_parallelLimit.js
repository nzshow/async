/*
* parallelLimit(tasks, limit, [callback])
* parallelLimit函数和parallel类似，但是它多了一个参数limit。 limit参数限制任务只能同时并发一定数量，而不是无限制并发*/
var async=require('async');
/*async.parallelLimit([
    function(callback){
        callback(null, 'one');
    },
    function(callback){
        callback(null, 'two');
    }
],
2,
function(err, results){
    console.log(results);
});*/

async.parallelLimit([
    function(callback){
        setTimeout(function(){
            callback(null, 'one');
        }, 1000);
    },
    function(callback){
        setTimeout(function(){
            callback(null, 'two');
        }, 1000);
    }
],
1,
function(err, results){
    console.log(results);
});