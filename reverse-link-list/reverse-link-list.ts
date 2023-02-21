/**
 * @description 翻转单向链表
 * @author Z. YanQ
 * @date 2023/2/16
 */

/**
 * 链表是一种物理结构, 类似数组
 * 相同:
 *    都是有序结构
 * 区别:
 *    数组: 需要联系的内存区间   查询快O(1) 插入删除很慢O(n)
 *    链表: 是零散的内存区间    查询慢O(n) 插入删除很快O(1)
 * 大致数据结构 { value, next?, prev? }
 */

export interface ILinkListNode {
  value: number
  next?: ILinkListNode
}

/**
 * 翻转单向链表
 * @param listNode
 */
export function reverseLinkList (listNode: ILinkListNode): ILinkListNode {
  let prevNode: ILinkListNode | undefined = undefined
  let curNode: ILinkListNode | undefined = undefined
  let nextNode: ILinkListNode | undefined = listNode

  // 以 nextNode 为主, 遍历链表
  while (nextNode) {
    // 第一个元素, 删掉 next, 防止循环引用
    if (curNode && !prevNode) {
      delete curNode.next
    }

    // 反转指针
    if (curNode && prevNode) {
      curNode.next = prevNode
    }

    // 整体向后移动指针
    prevNode = curNode
    curNode = nextNode
    nextNode = nextNode?.next
  }

  // 当 nextNode 空时, 此时 curNode尚未设置 next
  curNode!.next = prevNode

  return curNode!
}

/**
 * 根据数组创建链表
 * @param arr
 */
export function createLinkList (arr: number[]): ILinkListNode {
  const length = arr.length
  if (length === 0) throw new Error('arr is empty')

  let curNode: ILinkListNode = {
    value: arr[length - 1]
  }
  if (length === 1) {
    return curNode
  }

  for (let i = length - 2; i >= 0; i--) {
    curNode = {
      value: arr[i],
      next: curNode
    }
  }

  return curNode
}

// 功能测试
// const arr = [100, 200, 300, 400, 500]
// const list = createLinkList(arr)
//
// console.info(list)
//
//
// const list1 = reverseLinkList(list)
//
// console.log('---')
// console.info(list1)
