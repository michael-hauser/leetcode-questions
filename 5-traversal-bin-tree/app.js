// 5. Level order traversal of binary tree
// https://www.educative.io/blog/crack-amazon-coding-interview-questions

class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

// Add each level of the binary tree to a multi-dimensional list, which then can be printed
const level_order_traversal = (root) => {
    if(!root) return ""; // Return empty string if root is null
    
    let nodes = [[root]]; // Create a sub-list for each tree level
    let i = 0;
    let hasNextLevel = true;
    while (hasNextLevel) {
        hasNextLevel = false;
        nodes.push([]);
        // For each level, add any sub-nodes to the list for the next level
        nodes[i].forEach((n) => {
            if(n.left) {
                nodes[i+1].push(n.left);
                hasNextLevel = true;
            }
            if(n.right) {
                nodes[i+1].push(n.right);
                hasNextLevel = true;
            }
        });
        i++;
    }

    // Print the list
    const result = nodes.map(level => level.map(l => l.data).join(', ')).join('\n');

    return result;
}


// Create binary tree
const root = new Node(100, new Node(50, new Node(25), new Node(75)), new Node(200, null, new Node(350)));

// Test
console.log(level_order_traversal(root));