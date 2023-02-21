/**
 * @description 快速排序
 * @author Z. YanQ
 * @date 2023/2/20
 */

import { quickSort1, quickSort2, bubbleSort, orgSort } from './quick-sort'

describe('快速排序 - quickSort1', function () {
  it('正常情况', function () {
    const arr = [1, 6, 2, 7, 3, 8, 4, 9, 5]
    const res = quickSort1(arr)
    expect(res).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
  })

  it('有负数', function () {
    const arr = [-2, 2, -3, 1]
    const res = quickSort1(arr)
    expect(res).toEqual([-3, -2, 1, 2])
  })

  it('数组元素都一样', function () {
    const arr = [2, 2, 2, 2]
    const res = quickSort1(arr)
    expect(res).toEqual([2, 2, 2, 2])
  })

  it('空数组', function () {
    expect(quickSort1([])).toEqual([])
  })
})

describe('快速排序 - quickSort2', function () {
  it('正常情况', function () {
    const arr = [1, 6, 2, 7, 3, 8, 4, 9, 5]
    const res = quickSort2(arr)
    expect(res).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
  })

  it('有负数', function () {
    const arr = [-2, 2, -3, 1]
    const res = quickSort2(arr)
    expect(res).toEqual([-3, -2, 1, 2])
  })

  it('数组元素都一样', function () {
    const arr = [2, 2, 2, 2]
    const res = quickSort2(arr)
    expect(res).toEqual([2, 2, 2, 2])
  })

  it('空数组', function () {
    expect(quickSort2([])).toEqual([])
  })
})

describe('快速排序 - bubbleSort', function () {
  it('正常情况', function () {
    const arr = [1, 6, 2, 7, 3, 8, 4, 9, 5]
    const res = bubbleSort(arr)
    expect(res).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
  })

  it('有负数', function () {
    const arr = [-2, 2, -3, 1]
    const res = bubbleSort(arr)
    expect(res).toEqual([-3, -2, 1, 2])
  })

  it('数组元素都一样', function () {
    const arr = [2, 2, 2, 2]
    const res = bubbleSort(arr)
    expect(res).toEqual([2, 2, 2, 2])
  })

  it('空数组', function () {
    expect(bubbleSort([])).toEqual([])
  })
})


describe('快速排序 - orgSort', function () {
  it('正常情况', function () {
    const arr = [1, 6, 2, 7, 3, 8, 4, 9, 5]
    const res = orgSort(arr)
    expect(res).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
  })

  it('有负数', function () {
    const arr = [-2, 2, -3, 1]
    const res = orgSort(arr)
    expect(res).toEqual([-3, -2, 1, 2])
  })

  it('数组元素都一样', function () {
    const arr = [2, 2, 2, 2]
    const res = orgSort(arr)
    expect(res).toEqual([2, 2, 2, 2])
  })

  it('空数组', function () {
    expect(orgSort([])).toEqual([])
  })
})
