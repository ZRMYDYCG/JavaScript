/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function(nums, target) {
    let mid, left = 0, right = nums.length
    while(left < right) {
        mid = left + ((right - left) >> 1)
        if(nums[mid] > target) {
            right = mid
        } else if(nums[mid] < target) {
            left = mid + 1
        } else {
            return mid
        }
    }
    return -1
}
