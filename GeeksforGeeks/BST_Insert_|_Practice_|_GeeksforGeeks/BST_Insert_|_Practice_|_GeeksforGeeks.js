/**
 * @param {Node} root
 * @param {number} key
 * @return {Node}
 */

/*
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/

class Solution {
    insert(root, key) {
        // code here
        if (!root) {
            return new Node(key);
        }
        
        let currentNode = root;
        while (true) {
            if (key < currentNode.data) {
                if (!currentNode.left) {
                    currentNode.left = new Node(key)
                    return root;
                }
                currentNode = currentNode.left
            } else {
                if (!currentNode.right) {
                    currentNode.right = new Node(key)
                    return root;
                }
                currentNode = currentNode.right
            }
        }
    }
}