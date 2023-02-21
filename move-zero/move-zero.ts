/**
 * @description 移动 0 到数组末尾
 * @author Z. YanQ
 * @date 2023/2/20
 */

/**
 * 移动 0 到数组末尾(嵌套循环)
 * @param arr
 */
export function moveZero1 (arr: number[]): void {
  const len = arr.length
  if (len === 0) return

  let zeroLen = 0
  for (let i = 0; i < len - zeroLen; i++) {
    if (arr[i] === 0) {
      arr.push(0)
      arr.splice(i, 1)
      i--
      zeroLen++
    }
  }
}

/**
 * 移动 0 到数组末尾(双指针)
 * @param arr
 */
export function moveZero2 (arr: number[]): void {
  const len = arr.length
  if (len === 0) return

  let i
  let j = -1
  for (i = 0; i < len; i++) {
    if (arr[i] === 0) {
      if (j < 0) {
        j = i
      }
    }
    if (arr[i] !== 0 && j >= 0) {
      const n = arr [i]
      arr[i] = arr[j]
      arr[j] = n

      j++
    }
  }
}

// 功能测试
// const arr = [1, 0, 3, 4, 0, 0, 0, 11, 0]
// moveZero1(arr)
// moveZero2(arr)
// console.log(arr)

// 性能测试
// const arr1 = []
// for (let i = 0; i < 20 * 10000; i++) {
//   if (i % 10 === 0) {
//     arr1.push(0)
//   } else {
//     arr1.push()
//   }
// }
//
// console.time('moveZero1')
// moveZero1(arr1)
// console.timeEnd('moveZero1')
//
// const arr2 = []
// for (let i = 0; i < 20 * 10000; i++) {
//   if (i % 10 === 0) {
//     arr2.push(0)
//   } else {
//     arr2.push()
//   }
// }
//
// console.time('moveZero2')
// moveZero2(arr2)
// console.timeEnd('moveZero2')
