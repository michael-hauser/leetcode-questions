class TreeNode:
  def __init__(self, data, left = None, right = None):
    self.data = data
    self.left = left
    self.right = right

def level_order_traversal(root):
  if root == None:
    return ""
  
  nodes = [[root]]
  i = 0
  hasNextLevel = True
  
  while hasNextLevel:
    hasNextLevel = False
    nodes.append([])
    
    for j, n in enumerate(nodes[i]):
      if n.left != None:
        nodes[i+1].append(n.left)
        hasNextLevel = True
      if n.right != None:
        nodes[i+1].append(n.right)
        hasNextLevel = True
    
    i = i+1

    result = ', '.join([', '.join([str(l.data) for l in level]) for level in nodes[:-1]])

  return result