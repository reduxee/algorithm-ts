/**
 * @description 斐波那契数列
 * @author Z. YanQ
 * @date 2023/2/20
 */
import { fibonacci1, fibonacci2 } from './fibonacci'

describe('斐波那契数列 - fibonacci1', function () {
  it('0 和 1', function () {
    expect(fibonacci1(0)).toBe(0)
    expect(fibonacci1(1)).toBe(1)
  })

  it('正常情况', function () {
    expect(fibonacci1(2)).toBe(1)
    expect(fibonacci1(3)).toBe(2)
    expect(fibonacci1(6)).toBe(8)
    expect(fibonacci1(10)).toBe(55)
  })

  it('n < 0', function () {
    expect(fibonacci1(-2)).toBe(0)
  })
})

describe('斐波那契数列 - fibonacci2', function () {
  it('0 和 1', function () {
    expect(fibonacci2(0)).toBe(0)
    expect(fibonacci2(1)).toBe(1)
  })

  it('正常情况', function () {
    expect(fibonacci2(2)).toBe(1)
    expect(fibonacci2(3)).toBe(2)
    expect(fibonacci2(6)).toBe(8)
    expect(fibonacci2(10)).toBe(55)
  })

  it('n < 0', function () {
    expect(fibonacci2(-2)).toBe(0)
  })
})
