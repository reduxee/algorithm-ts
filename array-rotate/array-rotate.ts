/**
 * @description 旋转数组
 * @author Z. YanQ
 * @date 2023/2/16
 */


/**
 * unshift shift splice 很慢
 * push pop slice 很快
 *
 * 前端重时间, 轻空间
 */

/**
 * 旋转数组 - 使用 pop 和 unshift
 *
 * @param arr
 * @param k
 *
 * 时间复杂度 O(n^2), 空间复杂度 O(1)
 */
export function rotate1 (arr: number[], k: number): number[] {
  const length = arr.length

  if (!k || length === 0) return arr

  const step = Math.abs(k % length)

  // O(n)
  for (let i = 0; i < step; i++) {
    const n = arr.pop()
    if (n) {
      arr.unshift(n) // O(n) 数组是一个有序结构, unshift 操作非常慢
    }
  }

  return arr
}

/**
 * 旋转数组 - 使用 slice 和 concat
 *
 * @param arr
 * @param k
 *
 * 时间复杂度 O(1), 空间复杂度 O(n)
 */
export function rotate2 (arr: number[], k: number): number[] {
  const length = arr.length

  if (!k || length === 0) return arr

  const step = Math.abs(k % length)

  const part1 = arr.slice(-step) // O(1)
  const part2 = arr.slice(0, length - step) // O(1)
  const part3 = part1.concat(part2)

  return part3 // O(1)
}


// 功能测试
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(rotate1(arr, 3))
// console.log(rotate2(arr, 3))

// 性能测试
const k = 50
const length = 10000
const arr1 = []
for (let i = 0; i < length; i++) {
  arr1.push(i)
}

console.time('rotate1')
for (let i = 0; i < length; i++) {
  rotate1(arr1, k)
}
console.timeEnd('rotate1')

// console.info(binarySearch(arr, target))

const arr2 = []
for (let i = 0; i < length; i++) {
  arr2.push(i)
}

console.time('rotate2')
for (let i = 0; i < length; i++) {
  rotate2(arr2, k)
}
console.timeEnd('rotate2')
