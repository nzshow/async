/*
* forever(fn, errback);
* forever函数比较特殊，它的功能是无论条件如何，函数都一直循环执行，只有出现程序执行的过程中出现错误时循环才会停止，callback才会被调用。*/
var async=require('async');
var count=0;
async.forever(
    function(next) {
        count++;
        console.log(count);
        setTimeout(next,1000)
    },
    function(err) {
        console.error(err)
    }
);

/*
async.forever(
    function(next) {
        count++;
        if(count<10){
            console.log('我跑了'+count+'步。');
        }else{
            throw 'Err1'
        }

        //console.log(count);
        setTimeout(next,100)
    },
    function(err) {
        catch(err)
        console.error('我摔倒了')
    }
);
*/
