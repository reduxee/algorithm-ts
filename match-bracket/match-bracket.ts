/**
 * @description 判断左右括号是否匹配
 * @author Z. YanQ
 * @date 2023/2/16
 */

/**
 * 逻辑结构与物理结构
 * 栈是逻辑结构, 理论模型
 * 栈模型是先进后出, 后进先出
 * 数组是物理结构, 真实功能实现, 受限于编程语言
 */

/**
 * 判断左右括号是否匹配
 *
 * @param left 左括号
 * @param right 右括号
 */
function isMatch (left: string, right: string): boolean {
  if (left === '{' && right === '}') return true
  if (left === '[' && right === ']') return true
  if (left === '(' && right === ')') return true

  return false
}

/**
 * 判断是否括号匹配
 *
 * @param str
 *
 * 时间复杂度O(n)
 * 空间复杂度O(n)
 */
export function matchBracket (str: string): boolean {
  const length = str.length
  if (length === 0) return true

  const stack = []
  const leftSymbols = '{[('
  const rightSymbols = '}])'

  for (let i = 0; i < length; i++) {
    const s = str[i]

    if (leftSymbols.includes(s)) {
      stack.push(s)
    } else if (rightSymbols.includes(s)) {
      const top = stack[stack.length - 1]
      if (isMatch(top, s)) {
        stack.pop()
      } else {
        return false
      }
    }
  }

  return stack.length === 0
}

// 功能测试
// const str = '{a(b[c]d)e}f)a'
// console.log(matchBracket(str))
