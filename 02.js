/*
try{
    setTimeout(function(){
        var data = a/1; //错误的计算
    },1000);
}catch (e){
    console.log(e);
}*/

setTimeout(function(){
    try{
        var data = a/1; //错误的计算
    }catch(e){
        console.log(e);
    }
},1000);
