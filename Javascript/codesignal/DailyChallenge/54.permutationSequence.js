var permute = function(nums, set=[], answers= []){
    if(!nums.length) answers.push([...set]);

    for(let i=0; i<nums.length; i++){
        const newNums = nums.filter((n, index) => index !== i);
        set.push(nums[i]);
        permute(newNums, set, answers);
        set.pop();
    }

    return answers;
}

function permutationSequence(n, k) {
    let arr = [];
    for(let i=1; i<=n; i++){
        arr.push(i);
    }
    let perArr = permute(arr);
    return perArr[k-1].join('');
}

// console.log(permute([1,2,3]));
// console.log(permutationSequence(3,3));
console.log(permutationSequence(10,1));