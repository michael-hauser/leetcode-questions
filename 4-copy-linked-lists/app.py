class LinkedListNode:
   def __init__(self, data, next=None, arbitrary=None):
      self.data = data
      self.next = next
      self.arbitrary = arbitrary

def deep_copy_arbitrary_pointer(head):
   hash_old_new = {}
   curr = head
   dummy = LinkedListNode(None)
   new_curr = dummy
   
   while curr:
      # Clone and copy node
      clone = LinkedListNode(curr.data)
      clone.arbitrary = curr.arbitrary
      new_curr.next = clone
      
      # Save hash reference
      hash_old_new[curr] = clone

      # Increment
      curr = curr.next
      new_curr = new_curr.next
      
   # Reset loop
   curr = head
   new_curr = dummy.next

   # Assign refs 
   while curr:
      if curr.arbitrary:
         new_curr.arbitrary = hash_old_new[curr.arbitrary]
         
      # Increment
      curr = curr.next
      new_curr = new_curr.next

   # Remove dummy head
   return dummy.next