/**
 * @description 寻找和为 n 的两个数
 * @author Z. YanQ
 * @date 2023/2/16
 */
import { findTowNumbers1, findTowNumbers2 } from './two-number-sum'

describe('两数之和 - findTowNumbers1', function () {
  it('正常情况', function () {
    const arr = [1, 2, 3, 4, 7, 11, 15]
    const n = 15
    const res = findTowNumbers1(arr, n)
    expect(res).toEqual([4, 11])
  })

  it('空数组', function () {
    const res = findTowNumbers1([], 15)
    expect(res).toEqual([])
  })

  it('找不到结果', function () {
    const arr = [1, 2, 3, 4, 7, 11, 15]
    const n = 100
    const res = findTowNumbers1(arr, n)
    expect(res).toEqual([])
  })
})

describe('两数之和 - findTowNumbers2', function () {
  it('正常情况', function () {
    const arr = [1, 2, 3, 4, 7, 11, 15]
    const n = 15
    const res = findTowNumbers2(arr, n)
    expect(res).toEqual([4, 11])
  })

  it('空数组', function () {
    const res = findTowNumbers2([], 15)
    expect(res).toEqual([])
  })

  it('找不到结果', function () {
    const arr = [1, 2, 3, 4, 7, 11, 15]
    const n = 100
    const res = findTowNumbers2(arr, n)
    expect(res).toEqual([])
  })
})
