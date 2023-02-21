/**
 * @description 两个栈 - 一个队列
 * @author Z. YanQ
 * @date 2023/2/16
 */
import { MyQueue } from './two-stacks-one-queue'

describe('两个栈, 一个队列', () => {
  it('add and length', () => {
    const q = new MyQueue()
    q.add(100)
    q.add(200)
    q.add(300)
    expect(q.length).toBe(3)
  })

  it('delete', () => {
    const q = new MyQueue()
    expect(q.delete()).toBeNull()
    q.add(100)
    q.add(200)
    q.add(300)
    expect(q.delete()).toBe(100)
    expect(q.length).toBe(2)
    expect(q.delete()).toBe(200)
    expect(q.length).toBe(1)
  })
})
