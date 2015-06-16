/*
* apply(function, arguments..)
* 给函数预绑定参数
* apply是一个非常好用的函数，可以让我们给一个函数预绑定多个参数并生成一个可直接调用的新函数，简化代码。*/
//示例中writeFile依赖getData和makeFolder,emailLink依赖writeFile。
var async=require('async');
/*function(callback) {
    t.inc(3, callback);
}

async.apply(t.inc, 3);
var log = async.apply(console.log, ">");
log('hello');*/
// > hello

function(callback) {
    test(3, callback);
};
async.apply(test, 3);