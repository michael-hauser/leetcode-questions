// 6. Determine if a binary tree is a binary search tree
// https://www.educative.io/m/is-binary-tree-a-binary-search-tree

class TreeNode {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

// This solution recursively passes down the min and max value in a subtree
function is_bst(root) {
    const check = (node, min, max) => {
        if(!node) return true;
        if (node.data > max || node.data < min) return false;
        return check(node.left, min, node.data) && check(node.right, node.data, max);
    }
    return check(root, -Number.MAX_VALUE -1, Number.MAX_VALUE);
}

// Helper Function to print a BST
function print_bst(bst) {
    const levels = [[bst]]; // Multi dimensional array with an array per level
    let hasNextLevel = true;
    let i = 0;
    while(hasNextLevel) {
        hasNextLevel = false;
        levels[i].forEach(node => { // For each level, add it's children to the array for the next level
            if(node.left) {
                if(!levels[i+1]) levels.push([]);
                levels[i+1].push(node.left);
                hasNextLevel = true;
            }
            if(node.right) {
                if(!levels[i+1]) levels.push([]);
                levels[i+1].push(node.right);
                hasNextLevel = true;
            }
        });
        i++;
    }
    
    // Join and print
    console.log(levels.map(l => l.map(tn => tn.data).join(' ')).join('\n'));
}

// Example BSTs
const validBST = new TreeNode(100, new TreeNode(50, new TreeNode(25), new TreeNode(75)), new TreeNode(200, new TreeNode(125), new TreeNode(350)))
const invalidBST = new TreeNode(100, new TreeNode(50, new TreeNode(25), new TreeNode(75)), new TreeNode(200, new TreeNode(90), new TreeNode(350)))

// Test
print_bst(validBST);
console.log('Is Valid BST: ' + is_bst(validBST) + '\n');

print_bst(invalidBST);
console.log('Is Valid BST: ' + is_bst(invalidBST) + '\n');