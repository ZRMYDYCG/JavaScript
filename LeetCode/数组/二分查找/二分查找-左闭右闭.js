/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function(nums, target){
    let mid, left = 0, right = nums.length - 1
    while(left <= right) {
        mid = left + ((right - left) >> 1)
        if(nums[mid] > target) {
            right = mid - 1
        } else if(nums[mid] < target) {
            left = mid + 1
        } else {
            return mid
        }
    }
    return -1
}

console.log(search([1,2,3,4,5,6,7], 3))


