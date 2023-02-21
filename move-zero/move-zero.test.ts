/**
 * @description 移动 0 到数组末尾
 * @author Z. YanQ
 * @date 2023/2/20
 */
import { moveZero1, moveZero2 } from './move-zero'

describe('移动 0 到数组末尾 - moveZero1', function () {
  it('正常情况', function () {
    const arr = [1, 0, 3, 4, 0, 0, 0, 11, 0]
    moveZero1(arr)
    expect(arr).toEqual([1, 3, 4, 11, 0, 0, 0, 0, 0])
  })

  it('没有 0', function () {
    const arr = [1, 3, 4, 11]
    moveZero1(arr)
    expect(arr).toEqual([1, 3, 4, 11])
  })

  it('全是 0', function () {
    const arr = [0, 0, 0, 0, 0]
    moveZero1(arr)
    expect(arr).toEqual([0, 0, 0, 0, 0])
  })
})

describe('移动 0 到数组末尾 - moveZero2', function () {
  it('正常情况', function () {
    const arr = [1, 0, 3, 4, 0, 0, 0, 11, 0]
    moveZero2(arr)
    expect(arr).toEqual([1, 3, 4, 11, 0, 0, 0, 0, 0])
  })

  it('没有 0', function () {
    const arr = [1, 3, 4, 11]
    moveZero2(arr)
    expect(arr).toEqual([1, 3, 4, 11])
  })

  it('全是 0', function () {
    const arr = [0, 0, 0, 0, 0]
    moveZero2(arr)
    expect(arr).toEqual([0, 0, 0, 0, 0])
  })
})
