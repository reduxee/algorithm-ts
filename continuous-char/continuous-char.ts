/**
 * @description 连续字符
 * @author Z. YanQ
 * @date 2023/2/20
 */

interface IRes {
  char: string
  length: number
}

/**
 * 求连续最多的字符和次数 (嵌套循环)
 * @param str
 */
export function findContinuousChar1 (str: string): IRes {
  const res: IRes = {
    char: '',
    length: 0
  }

  const len = str.length
  if (len === 0) return res

  let temLen = 0

  for (let i = 0; i < len; i++) {
    temLen = 0

    for (let j = i; j < len; j++) {
      if (str[i] === str[j]) temLen++


      if (str[i] !== str[j] || j === len - 1) {
        // 不相等, 或已经到了最后一个元素, 判断最大值
        if (temLen > res.length) {
          res.char = str[i]
          res.length = temLen
        }

        if (i < len - 1) {
          i = j - 1
        }

        break
      }
    }
  }

  return res
}

/**
 * 求连续最多的字符和次数 (双指针)
 *
 * O(n)
 *
 * @param str
 */
export function findContinuousChar2 (str: string): IRes {
  const res: IRes = {
    char: '',
    length: 0
  }

  const len = str.length
  if (len === 0) return res

  let temLen = 0
  let i = 0
  let j = i

  for (; i < len; i++) {
    if (str[i] === str[j]) temLen++
    if (str[i] !== str[j] || i === len - 1) {
      if (temLen > res.length) {
        res.char = str[j]
        res.length = temLen
      }
      temLen = 0

      if (i < len - 1) {
        j = i
        i--
      }
    }
  }

  return res
}

// 功能测试
// const str = 'aabbcccddeeee11223344'
// console.info(findContinuousChar1(str))
// console.info(findContinuousChar2(str))

// 性能测试
let str = ''
for (let i = 0; i < 100 * 10000; i++) {
  str += i.toString()
}
console.time('findContinuousChar1')
findContinuousChar1(str)
console.timeEnd('findContinuousChar1')

console.time('findContinuousChar2')
findContinuousChar2(str)
console.timeEnd('findContinuousChar2')
