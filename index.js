var twoSum = function (nums, target) {
  for (var i = 0; i < nums.length - 1; i++) {
      rest = nums.slice(i + 1)
      console.log(rest)
      if (rest.includes(target - nums[i])) {
      return [i, i + 1 + rest.indexOf(target - nums[i])]
    }
  }
}

const runningSum = function(nums){
  return nums.reduce((a,c)=> [...a,c + (a[a.length-1]||0)],[])
}

nums = [2, 7, 11, 15]
target = 9

console.log(twoSum(nums, target))
console.log(runningSum(nums))