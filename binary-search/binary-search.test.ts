/**
 * @description 旋转数组
 * @author Z. YanQ
 * @date 2023/2/16
 */

import { binarySearch1, binarySearch2 } from './binary-search'

describe('二分查找 - binarySearch1', () => {
  it('正常情况', function () {
    const arr = [10, 20, 30, 40, 50]
    const target = 40
    const index = binarySearch1(arr, target)
    expect(index).toBe(3)
  })

  it('空数组', function () {
    expect(binarySearch1([], 100)).toBe(-1)
  })

  it('找不到', function () {
    const arr = [10, 20, 30, 40, 50]
    const target = 400
    const index = binarySearch1(arr, target)
    expect(index).toBe(-1)
  })
})


describe('二分查找 - binarySearch2', () => {
  it('正常情况', function () {
    const arr = [10, 20, 30, 40, 50]
    const target = 40
    const index = binarySearch2(arr, target)
    expect(index).toBe(3)
  })

  it('空数组', function () {
    expect(binarySearch2([], 100)).toBe(-1)
  })

  it('找不到', function () {
    const arr = [10, 20, 30, 40, 50]
    const target = 400
    const index = binarySearch2(arr, target)
    expect(index).toBe(-1)
  })
})
