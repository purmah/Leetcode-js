//brute 
function missingNumber1(nums){
    nums.sort((a,b)=>a-b);  //nlogn
    for(i=0;i<nums.length;i++){
        if(nums[i]!=i){
            return i
        }
    }
}
console.log(missingNumber1([0,2,3,4,1,6]));

//better
function missingNumber(nums){
    let numSum = nums.reduce((acc, num) => acc + num, 0);
    const accSum = nums.length*(nums.length+1)/2
    return accSum-numSum;
}
console.log(missingNumber([0,2,3,4,1,6]));