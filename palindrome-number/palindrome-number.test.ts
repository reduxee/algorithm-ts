/**
 * @description 对称数
 * @author Z. YanQ
 * @date 2023/2/20
 */
import { findPalindromeNumbers1, findPalindromeNumbers2, findPalindromeNumbers3 } from './palindrome-number'

describe('对称数 - findPalindromeNumbers1', function () {
  it('正常情况', function () {
    const numbers = findPalindromeNumbers1(200)
    expect(numbers.length).toBe(28)
  })

  it('max 小于等于 0', function () {
    const numbers = findPalindromeNumbers1(0)
    expect(numbers).toEqual([])
  })
})

describe('对称数 - findPalindromeNumbers2', function () {
  it('正常情况', function () {
    const numbers = findPalindromeNumbers2(200)
    expect(numbers.length).toBe(28)
  })

  it('max 小于等于 0', function () {
    const numbers = findPalindromeNumbers2(0)
    expect(numbers).toEqual([])
  })
})

describe('对称数 - findPalindromeNumbers3', function () {
  it('正常情况', function () {
    const numbers = findPalindromeNumbers3(200)
    expect(numbers.length).toBe(28)
  })

  it('max 小于等于 0', function () {
    const numbers = findPalindromeNumbers3(0)
    expect(numbers).toEqual([])
  })
})
