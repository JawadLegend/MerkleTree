export default class MerkleTree {
    constructor(leaves, concat) {
        this.leaves = leaves
        this.concat = concat
    }

    getRoot(leaves = this.leaves) {
        // base case
        if (leaves.length == 1) {
            return leaves[0]
        }
        const treeLayer = []
        for (let i = 0; i < leaves.length; i += 2) {
            const leftNode = leaves[i]
            const rightNode = leaves[i + 1]

            if (rightNode == null) {
                treeLayer.push(leftNode)
            } else {
                let concatenation = this.concat(leftNode, rightNode)
                console.log(concatenation)
                treeLayer.push(concatenation)
            }
        }
        return this.getRoot(treeLayer)
    }
}
