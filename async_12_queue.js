/*
* queue(worker, concurrency);
* 可设定worker数量的队列
* queue相当于一个加强版的parallel，主要是限制了worker数量，不再一次性全部执行。当worker数量不够用时，新加入的任务将会排队等候，直到有新的worker可用。
* 它有多个点可供回调，如无等候任务时(empty)、全部执行完时(drain)等。*/
//示例中writeFile依赖getData和makeFolder,emailLink依赖writeFile。
var async=require('async');
var q = async.queue(function(task, callback) {
    console.log('worker is processing task: ', task.name);
    callback();
}, 2);
q.push({name: 'foo'}, function (err) {
    console.log('finished processing foo');
});
q.push({name: 'bar'}, function (err) {
    console.log('finished processing bar');
});
q.empty = function() {
    console.log('work is over.');
}