process.on('tick', function(count){
    console.log('tick 이벤트 발생 함 : %s', count);
})

setTimeout(function(){
    console.log('2초후에 tick 이벤트 전달 시도 함.');

    process.emit('tick','2');
}, 2000)