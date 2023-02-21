/**
 * @description 对称数
 * @author Z. YanQ
 * @date 2023/2/20
 */

/**
 * 查询 1 - max 的所有对称数(数组反转)
 * @param max
 */
export function findPalindromeNumbers1 (max: number): number[] {
  const res: number [] = []
  if (max < 0) return res

  for (let i = 1; i <= max; i++) {
    // 转换为字符串, 转换为数组, 再翻转, 比较
    const s = i.toString()
    const n = s.split('').reverse().join('')
    if (s === n) {
      res.push(i)
    }
  }

  return res
}

/**
 * 查询 1 - max 的所有对称数(字符串前后比较)
 * @param max
 */
export function findPalindromeNumbers2 (max: number): number[] {
  const res: number [] = []
  if (max <= 0) return res

  for (let i = 1; i < max; i++) {
    const s = i.toString()
    const len = s.length

    let flag = true
    let startIndex = 0 // 字符串开始
    let endIndex = len - 1 // 字符串结束
    while (startIndex < endIndex) {
      if (s[startIndex] !== s[endIndex]) {
        flag = false
        break
      } else {
        startIndex++
        endIndex--
      }
    }

    if (flag) res.push(i)
  }

  return res
}

/**
 * 查询 1 - max 的所有对称数(翻转数字)
 * @param max
 */
export function findPalindromeNumbers3 (max: number): number[] {
  const res: number [] = []
  if (max <= 0) return res

  for (let i = 1; i < max; i++) {
    let n = i
    let rev = 0 // 存储翻转数

    //生成翻转数
    while (n > 0) {
      rev = rev * 10 + n % 10
      n = Math.floor(n / 10)
    }

    if (i === rev) res.push(i)
  }

  return res
}

// 功能测试
// console.info(findPalindromeNumbers1(200))
// console.info(findPalindromeNumbers2(200).length)
// console.info(findPalindromeNumbers3(200).length)

// 性能测试
console.time('findPalindromeNumbers1')
findPalindromeNumbers1(100 * 10000)
console.timeEnd('findPalindromeNumbers1')

console.time('findPalindromeNumbers2')
findPalindromeNumbers2(100 * 10000)
console.timeEnd('findPalindromeNumbers2')

console.time('findPalindromeNumbers3')
findPalindromeNumbers3(100 * 10000)
console.timeEnd('findPalindromeNumbers3')
