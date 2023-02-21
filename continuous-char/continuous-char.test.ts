/**
 * @description 连续字符
 * @author Z. YanQ
 * @date 2023/2/20
 */

import { findContinuousChar1, findContinuousChar2 } from './continuous-char'

describe('连续字符和长度 - findContinuousChar1', function () {
  it('正常情况', function () {
    const str = 'aabbcccddeeee11223344'
    const res = findContinuousChar1(str)
    expect(res).toEqual({char: 'e', length: 4})
  })

  it('空字符串', function () {
    const res = findContinuousChar1('')
    expect(res).toEqual({char: '', length: 0})
  })

  it('无连续字符', function () {
    const str = 'abc'
    const res = findContinuousChar1(str)
    expect(res).toEqual({char: 'a', length: 1})
  })

  it('全部连续字符', function () {
    const str = 'aaa'
    const res = findContinuousChar1(str)
    expect(res).toEqual({char: 'a', length: 3})
  })
})

describe('连续字符和长度 - findContinuousChar2', function () {
  it('正常情况', function () {
    const str = 'aabbcccddeeee11223344'
    const res = findContinuousChar2(str)
    expect(res).toEqual({char: 'e', length: 4})
  })

  it('空字符串', function () {
    const res = findContinuousChar2('')
    expect(res).toEqual({char: '', length: 0})
  })

  it('无连续字符', function () {
    const str = 'abc'
    const res = findContinuousChar2(str)
    expect(res).toEqual({char: 'a', length: 1})
  })

  it('全部连续字符', function () {
    const str = 'aaa'
    const res = findContinuousChar2(str)
    expect(res).toEqual({char: 'a', length: 3})
  })
})
