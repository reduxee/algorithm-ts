/**
 * @description 翻转单向链表
 * @author Z. YanQ
 * @date 2023/2/16
 */
import { ILinkListNode, reverseLinkList, createLinkList } from './reverse-link-list'

describe('翻转单向链表', function () {
  it('单个元素', function () {
    const node: ILinkListNode = {value: 100}
    const node1 = reverseLinkList(node)
    expect(node1).toEqual({value: 100})
  })

  it('多个元素', function () {
    const node = createLinkList([100, 200, 300])
    const node1 = reverseLinkList(node)
    expect(node1).toEqual({
      value: 300,
      next: {
        value: 200,
        next: {
          value: 100
        }
      }
    })
  })
})
