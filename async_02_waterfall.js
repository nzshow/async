/*
* waterfall(tasks, [callback])
* 多个函数依次执行，且前一个的输出为后一个的输入
* waterfall和series函数有很多相似之处，都是按顺序依次执行一组函数，不同之处是waterfall每个函数产生的值，都将传给下一个函数，而series则没有这个功能
* 另外需要注意的是waterfall的tasks参数只能是数组类型。
* */
var async=require('async');
/*
async.waterfall([
    function(callback){
        //task1
        callback(null,1);
    },function(data,callback){
        //task1
        callback(null,2);
    }
],function(err,results){
    console.log(results);
});*/

async.waterfall([
    function(callback){
        callback('test',1);
    },function(data,callback){
        callback('test2',2);
    }
],function(err,results){
    console.log(results);
});
