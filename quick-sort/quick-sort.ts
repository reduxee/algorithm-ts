/**
 * @description 快速排序
 * @author Z. YanQ
 * @date 2023/2/20
 */

/**
 * 快速排序(splice)
 *
 * 时间复杂度 O(nlogn)
 *
 * @param arr
 */
export function quickSort1 (arr: number[]): number[] {
  const len = arr.length
  if (len === 0) return arr

  const midIndex = Math.floor(len / 2)
  const midValue = arr.splice(midIndex, 1)[0]

  const left: number[] = []
  const right: number[] = []

  for (let i = 0; i < arr.length; i++) {
    const n = arr[i]
    if (n < midValue) {
      // 小于 midValue, 放在 left
      left.push(n)
    } else {
      // 大于 midValue, 放在 right
      right.push(n)
    }
  }

  return quickSort1(left).concat([midValue], quickSort1(right))
}

export function quickSort2 (arr: number[]): number[] {
  const len = arr.length
  if (len === 0) return arr

  const midIndex = Math.floor(len / 2)
  const midValue = arr.slice(midIndex, midIndex + 1)[0]

  const left: number[] = []
  const right: number[] = []

  for (let i = 0; i < len; i++) {
    if (i !== midIndex) {
      const n = arr[i]

      if (n < midValue) {
        // 小于 midValue, 放在 left
        left.push(n)
      } else {
        // 大于 midValue, 放在 right
        right.push(n)
      }
    }
  }

  return quickSort2(left).concat([midValue], quickSort2(right))
}

export function bubbleSort (arr: number[]): number[] {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      let tem
      if (arr[i] < arr[j]) {
        tem = arr[j]
        arr[j] = arr[i]
        arr[i] = tem
      }
    }
  }
  return arr
}

export function orgSort (arr: number[]): number[] {
  return arr.sort((a, b) => {
    return a - b
  })
}

// 功能测试
// const arr1 = [1, 6, 2, 7, 3, 8, 4, 9, 5]
// console.info(quickSort1(arr1))
// const arr2 = [1, 6, 2, 7, 3, 8, 4, 9, 5]
// console.info(quickSort2(arr2))
// console.info(bubbleSort(arr1))
// console.info(orgSort(arr1))

// 性能测试
const arr1 = []
for (let i = 0; i < 10 * 10000; i++) {
  arr1.push(Math.floor(Math.random() * 1000))
}
console.time('quickSort1')
quickSort1(arr1)
console.timeEnd('quickSort1')
const arr2 = []
for (let i = 0; i < 10 * 10000; i++) {
  arr2.push(Math.floor(Math.random() * 1000))
}
console.time('quickSort2')
quickSort2(arr2)
console.timeEnd('quickSort2')

const arr4 = []
for (let i = 0; i < 10 * 10000; i++) {
  arr4.push(Math.floor(Math.random() * 1000))
}
console.time('orgSort')
orgSort(arr4)
console.timeEnd('orgSort')

const arr3 = []
for (let i = 0; i < 10 * 10000; i++) {
  arr3.push(Math.floor(Math.random() * 1000))
}
console.time('bubbleSort')
bubbleSort(arr3)
console.timeEnd('bubbleSort')

