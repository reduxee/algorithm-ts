/**
 * @description 二分查找
 * @author Z. YanQ
 * @date 2023/2/16
 */

/**
 * 二分查找(循环)
 * 找到则返回下标
 * 没有找到则返回 -1
 * @param arr
 * @param target
 */
export function binarySearch1 (arr: number[], target: number): number {
  const length = arr.length
  if (length === 0) return -1

  let startIndex = 0 // 开始位置
  let endIndex = length - 1 //结束位置

  while (startIndex <= endIndex) {
    const midIndex = Math.floor((startIndex + endIndex) / 2)
    const midValue = arr[midIndex]
    if (target < midValue) {
      // 目标值较小, 则在左侧查找
      endIndex = midIndex - 1
    } else if (target > midValue) {
      // 目标值较大, 则在右侧查找
      startIndex = midIndex + 1
    } else {
      // 相等, 则返回
      return midIndex
    }
  }

  return -1
}

/**
 * 二分查找(递归)
 * 找到则返回下标
 * 没有找到则返回 -1
 * @param arr
 * @param target
 * @param startIndex
 * @param endIndex
 */
export function binarySearch2 (arr: number[], target: number, startIndex?: number, endIndex?: number): number {
  const length = arr.length
  if (length === 0) return -1

  if (!startIndex) startIndex = 0
  if (!endIndex) endIndex = length - 1

  if (startIndex > endIndex) return -1

  const midIndex = Math.floor((startIndex + endIndex) / 2)
  const midValue = arr[midIndex]
  if (target < midValue) {
    // 目标值较小, 则在左侧查找
    return binarySearch2(arr, target, startIndex, midIndex - 1)
  } else if (target > midValue) {
    // 目标值较大, 则在右侧查找
    return binarySearch2(arr, target, midIndex + 1, endIndex)
  } else {
    // 相等, 则返回
    return midIndex
  }
}

const arr = [10, 20, 30, 50, 60, 70, 80, 100, 200, 300]
const target = 60

// console.info(binarySearch1(arr, target))
console.time('binarySearch')
for (let i = 0; i < 100 * 100000; i++) {
  binarySearch1(arr, target)
}
console.timeEnd('binarySearch')

// console.info(binarySearch2(arr, target))

console.time('binarySearch2')
for (let i = 0; i < 100 * 100000; i++) {
  binarySearch2(arr, target)
}
console.timeEnd('binarySearch2')
