//Given an array of integers nums and an integer target, return indices of the two numbers //such that they add up to target.
//You may assume that each input would have exactly one solution, and you may not use the same element twice.
//You can return the answer in any order.
//Input: nums = [2,7,11,15], target = 9
//Output: [0,1]
//Explanation: Because nums[0] + nums[1] == 9, we return [0, 1]

//brute force tc- o(n^2)
function twoSum(nums,target){
    for(i=0;i<nums.length;i++){
        for(j=0;j<nums.length;j++){
            if(nums[i]+nums[j]==target){
                return [i,j]
            }
        }
    }
}
console.log(twoSum([2,7,11,15],9))

//better tc- o(n)

function twoSum1(nums,target){
    let myHash = {}
    for(i=0;i<nums.length;i++){
        let number = target-nums[i]
        if(number in myHash){
            return [myHash[number],i] 
        }
        myHash[nums[i]] = i; //for storing number and its index in hashmap
    }
}
console.log(twoSum1([3,3],6))