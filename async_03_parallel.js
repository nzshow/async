/*
* parallel(tasks, [callback])
* parallel函数是并行执行多个函数，每个函数都是立即执行，不需要等待其它函数先执行。 传给最终callback的数组中的数据按照tasks中声明的顺序，而不是执行完成的顺序
* tasks参数可以是一个数组或是json对象，和series函数一样，tasks参数类型不同，返回的results格式会不一样。
*
*/
var async=require('async');
/*
async.parallel([
    function(callback){
        callback(null, 'one');
    },
    function(callback){
        callback(null, 'two');
    }
],
function(err, results){
    if(err)
        console.error(err);
    else
        console.log(results)
});*/

async.parallel([
    function(callback){
        setTimeout(function(){
            callback(null, 'one')
        },1000);
    },
    function(callback){
        setTimeout(function(){
            callback(null, 'two')
        },1000);
    }
],
function(err, results){
    console.log(results);
});
