/**
 * @description 二叉树
 * @author Z. YanQ
 * @date 2023/2/16
 */

/**
 * 二叉树
 * 三种(前序, 中序, 后序)遍历
 * 二叉搜索树的特点: left <= root; right >= root;
 *
 * 数组, 链表, 各有各的缺点
 * 特定的二叉树(BBST, Balance Binary Search Tree) 可以让整体效果最优
 * 各种高级二叉树, 继续优化, 满足不同场景
 */

interface ITreeNode {
  value: number
  left: ITreeNode | null
  right: ITreeNode | null
}

const arr: number[] = []

/**
 * 二叉树前序遍历
 *
 * @param node
 */
function preOrderTraverse (node: ITreeNode | null) {
  if (!node) return
  // console.log(node.value)
  arr.push(node.value)
  preOrderTraverse(node.left)
  preOrderTraverse(node.right)
}

/**
 * 二叉树中序遍历
 *
 * @param node
 */
function inOrderTraverse (node: ITreeNode | null) {
  if (!node) return
  inOrderTraverse(node.left)
  // console.log(node.value)
  arr.push(node.value)
  inOrderTraverse(node.right)
}

/**
 * 二叉树后序遍历
 *
 * @param node
 */
function postOrderTraverse (node: ITreeNode | null) {
  if (!node) return
  postOrderTraverse(node.left)
  postOrderTraverse(node.right)
  // console.log(node.value)
  arr.push(node.value)
}

/**
 * 寻找 BST 里的第 K 小值
 *
 * @param node
 * @param k
 */
export function getKthValue (node: ITreeNode, k: number): number | null {
  inOrderTraverse(node)
  console.log(arr)

  return arr[k - 1] || null
}

const bst: ITreeNode = {
  value: 5,
  left: {
    value: 3,
    left: {
      value: 2,
      left: null,
      right: null
    },
    right: {
      value: 4,
      left: null,
      right: null
    }
  },
  right: {
    value: 7,
    left: {
      value: 6,
      left: null,
      right: null
    },
    right: {
      value: 8,
      left: null,
      right: null
    }
  }
}

preOrderTraverse(bst)
console.log('---')
inOrderTraverse(bst)
console.log('---')
postOrderTraverse(bst)
console.log('---')


console.log(getKthValue(bst, 3))
