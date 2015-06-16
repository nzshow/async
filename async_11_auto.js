/*
* auto(tasks, [callback]);
* 多个函数有依赖关系，有的并行执行，有的依次执行
* 用来处理有依赖关系的多个任务的执行。*/
//示例中writeFile依赖getData和makeFolder,emailLink依赖writeFile。
var async=require('async');
async.auto({
    getData: function(callback){
        callback(null, 'data', 'converted to array');
    },
    makeFolder: function(callback){
        callback(null, 'folder');
    },
    writeFile: ['getData', 'makeFolder', function(callback, results){
        callback(null, 'filename');
    }],
    emailLink: ['writeFile', function(callback, results){
        callback(null, {'file':results.writeFile, 'email':'user@example.com'});
    }]
}, function(err, results) {
    console.log('err = ', err);
    console.log('results = ', results);
});