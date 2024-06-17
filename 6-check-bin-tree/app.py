class TreeNode:
    def __init__(self, data, left=None, right=None):
        self.data = data
        self.left = left
        self.right = right

def is_bst(root):
    def check(node, min_val, max_val):
        if not node:
            return True
        if node.data > max_val or node.data < min_val:
            return False
        return check(node.left, min_val, node.data) and check(node.right, node.data, max_val)
    return check(root, -float('inf'), float('inf'))

def print_bst(bst):
    levels = [[bst]]
    has_next_level = True
    i = 0
    while has_next_level:
        has_next_level = False
        new_level = []
        for node in levels[i]:
            if node.left:
                new_level.append(node.left)
                has_next_level = True
            if node.right:
                new_level.append(node.right)
                has_next_level = True
        if new_level:
            levels.append(new_level)
        i += 1

    print('\n'.join([' '.join(str(node.data) for node in level) for level in levels]))

valid_bst = TreeNode(100, TreeNode(50, TreeNode(25), TreeNode(75)), TreeNode(200, TreeNode(125), TreeNode(350)))
invalid_bst = TreeNode(100, TreeNode(50, TreeNode(25), TreeNode(75)), TreeNode(200, TreeNode(90), TreeNode(350)))

print_bst(valid_bst)
print('Is Valid BST:', is_bst(valid_bst))

print_bst(invalid_bst)
print('Is Valid BST:', is_bst(invalid_bst))

