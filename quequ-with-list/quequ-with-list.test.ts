/**
 * @description 链表实现队列
 * @author Z. YanQ
 * @date 2023/2/17
 */
import { MyQueue } from './quequ-with-list'

describe('链表实现队列', function () {
  it('add and length', function () {
    const q = new MyQueue()
    q.add(100)
    q.add(200)
    q.add(300)

    expect(q.length).toBe(3)
  })

  it('delete', function () {
    const q = new MyQueue()
    q.add(100)
    q.add(200)
    q.add(300)

    expect(q.delete()).toBe(100)
    expect(q.delete()).toBe(200)
    expect(q.delete()).toBe(300)
    expect(q.delete()).toBeNull()
  })
})
