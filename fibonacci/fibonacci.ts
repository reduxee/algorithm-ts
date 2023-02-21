/**
 * @description 斐波那契数列
 * @author Z. YanQ
 * @date 2023/2/20
 */

/**
 * 斐波那契数列(递归)
 * 时间复杂度 O(2^n)
 * @param n
 */
export function fibonacci1 (n: number): number {
  if (n <= 0) return 0
  if (n === 1) return 1

  return fibonacci1(n - 1) + fibonacci1(n - 2)
}

/**
 * 斐波那契数列(循环)
 * @param n
 */
export function fibonacci2 (n: number): number {
  if (n <= 0) return 0
  if (n === 1) return 1

  let n1 = 1
  let n2 = 0
  let res = 0

  for (let i = 2; i <= n; i++) {
    res = n1 + n2
    n2 = n1
    n1 = res
  }

  return res
}

// 功能测试
// console.log(fibonacci1(10))
// console.log(fibonacci2(10))

// 性能测试
// console.time('fibonacci1')
// fibonacci1(30)
// console.timeEnd('fibonacci1')
//
// console.time('fibonacci2')
// fibonacci2(30)
// console.timeEnd('fibonacci2')
