var twoSum = function (nums, target) {
  for (var i = 0; i < nums.length - 1; i++) {
      rest = nums.slice(i + 1)
      console.log(rest)
      if (rest.includes(target - nums[i])) {
      return [i, i + 1 + rest.indexOf(target - nums[i])]
    }
  }
}

nums = [2, 7, 11, 15]
target = 9

console.log(twoSum(nums, target))
