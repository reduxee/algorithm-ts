/**
 * @description 切换字母大小写
 * @author Z. YanQ
 * @date 2023/2/20
 */

/**
 * 切换字母大小写(正则)
 * @param s
 */
export function switchLetterCase1 (s: string): string {
  let res = ''

  const len = s.length
  if (len === 0) return res

  const reg1 = /[a-z]/
  const reg2 = /[A-Z]/

  for (let i = 0; i < len; i++) {
    const c = s[i]
    if (reg1.test(c)) {
      res += c.toUpperCase()
    } else if (reg2.test(c)) {
      res += c.toLowerCase()
    } else {
      res += c
    }
  }

  return res
}

/**
 * 切换字母大小写(正则)
 * @param s
 */
export function switchLetterCase2 (s: string): string {
  let res = ''

  const len = s.length
  if (len === 0) return res

  for (let i = 0; i < len; i++) {
    const c = s[i]
    const code = c.charCodeAt(0)

    if (code >= 65 && code <= 90) {
      res += c.toLowerCase()
    } else if (code >= 97 && code <= 122) {
      res += c.toUpperCase()
    } else {
      res += c
    }
  }

  return res
}

// 功能测试
// const str = '100aBcD$xYz'
// console.info(switchLetterCase1(str))
// console.info(switchLetterCase2(str))

// 性能测试
const str = '100aBcD$xYz100aBcD$xYz100aBcD$xYz100aBcD$xYz100aBcD$xYz100aBcD$xYz100aBcD$xYz100aBcD$xYz'
const times = 10 * 10000
console.time('switchLetterCase1')
for (let i = 0; i < times; i++) {
  switchLetterCase1(str)
}
console.timeEnd('switchLetterCase1')

console.time('switchLetterCase2')
for (let i = 0; i < times; i++) {
  switchLetterCase2(str)
}
console.timeEnd('switchLetterCase2')
