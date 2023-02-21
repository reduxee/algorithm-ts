/**
 * @description 切换字母大小写
 * @author Z. YanQ
 * @date 2023/2/20
 */

import { switchLetterCase1, switchLetterCase2 } from './switch-letter-case'

describe('切换字母大小写 - switchLetterCase1', function () {
  it('正常情况', function () {
    const str = '100aBcD$xYz'
    const res = switchLetterCase1(str)
    expect(res).toBe('100AbCd$XyZ')
  })

  it('空字符串', function () {
    const res = switchLetterCase1('')
    expect(res).toBe('')
  })

  it('没有字母', function () {
    const res = switchLetterCase1('100你好')
    expect(res).toBe('100你好')
  })
})

describe('切换字母大小写 - switchLetterCase2', function () {
  it('正常情况', function () {
    const str = '100aBcD$xYz'
    const res = switchLetterCase2(str)
    expect(res).toBe('100AbCd$XyZ')
  })

  it('空字符串', function () {
    const res = switchLetterCase2('')
    expect(res).toBe('')
  })

  it('没有字母', function () {
    const res = switchLetterCase2('100你好')
    expect(res).toBe('100你好')
  })
})
