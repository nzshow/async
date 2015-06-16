//npm install async
/*
* series(tasks,callback);
* 多个函数依次执行，之间没有数据交换
* series函数的第一个参数可以是一个数组也可以是一个JSON对象，参数类型不同，影响的是返回数据的格式，如示例中的参数为数组，返回的results应该是这样的'[1,2]'。
*
*
*/
var async=require('async');
/*async.series({
    one: function(callback){
        callback(null,1);
    },
    two: function(callback){
        callback(null,2);
    }
},function(err, results) {
    if(err)
        console.error(err);
    else
        console.log(results)
});*/

/*async.series({
    one: function(callback){
        callback(null,[1,2,3,4,5]);
    },
    two: function(callback){
        callback(null,{'name':'Leo',age:27});
    }
},function(err, results) {
    if(err)
        console.error(err);
    else
        console.log(results)
});*/


async.series([
    function(callback){
        callback(null, 1);
    },
    function(callback){
        callback(null, 2);
    }
],function(err, results) {
    console.log(results);
});