/**
 * @description 寻找和为 n 的两个数
 * @author Z. YanQ
 * @date 2023/2/16
 */

/**
 * 寻找和为 n 的嵌套循环
 * @param arr
 * @param n
 */
export function findTowNumbers1 (arr: number[], n: number): number[] {
  const res: number[] = []

  const length = arr.length
  if (length === 0) return res

  // O(n^2)
  for (let i = 0; i < length - 1; i++) {
    const n1 = arr[i]
    let flag = false

    for (let j = i + 1; j < length; j++) {
      const n2 = arr[j]

      if (n1 + n2 === n) {
        res.push(n1)
        res.push(n2)
        flag = true
        break
      }
    }

    if (flag) break
  }

  return res
}


/**
 * 双指针, 时间复杂度降低到 O(n)
 * @param arr
 * @param n
 */
export function findTowNumbers2 (arr: number[], n: number): number[] {
  const res: number[] = []

  const length = arr.length
  if (length === 0) return res

  let i = 0
  let j = length - 1

  while (i < j) {
    const n1 = arr[i]
    const n2 = arr[j]
    const sum = n1 + n2

    if (sum > n) {
      // sum 大于 n, 则 j 要向前移动
      j--
    } else if (sum < n) {
      i++
    } else {
      res.push(n1)
      res.push(n2)
      break
    }
  }
  return res
}

// 功能测试
// const arr = [1, 2, 4, 7, 11, 15]
// console.info(findTowNumbers1(arr, 15))
// console.info(findTowNumbers2(arr, 15))


// const arr = [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 4, 7, 11, 15]
// console.time('findTowNumbers1')
// console.info(findTowNumbers1(arr, 15))
// console.timeEnd('findTowNumbers1')
//
// console.time('findTowNumbers2')
// console.info(findTowNumbers2(arr, 15))
// console.timeEnd('findTowNumbers2')
