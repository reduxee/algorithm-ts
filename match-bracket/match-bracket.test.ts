/**
 * @description 旋转数组
 * @author Z. YanQ
 * @date 2023/2/16
 */

import { matchBracket } from './match-bracket'

describe('括号匹配 - matchBracket', () => {
  it('正常情况', function () {
    const str = '{a(b[c]d)e}fa'
    const res = matchBracket(str)
    expect(res).toBe(true)
  })

  it('不匹配', function () {
    const str = '{a(b[c]d)e}f)a'
    const res = matchBracket(str)
    expect(res).toBe(false)
  })

  it('顺序不一致的', function () {
    const str = '{a(b[c]d}e)fa'
    const res = matchBracket(str)
    expect(res).toBe(false)
  })

  it('空字符串', function () {
    const res = matchBracket('')
    expect(res).toBe(true)
  })
})
