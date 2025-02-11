//448 lc - o(n)
function missingNumbers(nums){
    let result =[]
    const numSet = new Set(nums)
    for(i=1;i<nums.length;i++){
        if(!numSet.has(i)){
            result.push(i)
        }
    }
    return result    
}
console.log(missingNumbers([4,3,2,7,8,2,3,1]))

