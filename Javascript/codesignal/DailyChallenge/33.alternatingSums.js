function alternatingSums(a) {
    let arr = new Array(2).fill(0);
    for(let i=0; i<a.length; i++){
        if(i%2==0){
            arr[0]+=a[i];
        }else{
            arr[1]+=a[i]
        }
    }
    return arr;
}


console.log(alternatingSums([50, 60, 60, 45, 70]));