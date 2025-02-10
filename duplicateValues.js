function duplicateValue(nums){
    const numSet = new Set(nums);
    if(nums.length==numSet.size){
        return false
    }
    else{
        return true

    }
}
console.log(duplicateValue([1,2,3,4,4]))