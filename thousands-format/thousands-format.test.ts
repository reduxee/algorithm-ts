/**
 * @description 千分位格式化
 * @author Z. YanQ
 * @date 2023/2/20
 */
import { format1, format2 } from './thousands-format'

describe('数组千分位格式化 - format1', function () {
  it('正常', function () {
    const n = 10201004050
    const res = format1(n)
    expect(res).toBe('10,201,004,050')
  })

  it('小于 1000', function () {
    expect(format1(0)).toBe('0')
    expect(format1(10)).toBe('10')
  })
})

describe('数组千分位格式化 - format2', function () {
  it('正常', function () {
    const n = 10201004050
    const res = format2(n)
    expect(res).toBe('10,201,004,050')
  })

  it('小于 1000', function () {
    expect(format2(0)).toBe('0')
    expect(format2(10)).toBe('10')
  })
})
