class LinkedListNode:
    def __init__(self, data):
        self.data = data
        self.next = None

def merge_lists(head1, head2):
    curr1 = head1
    curr2 = head2
    head_sorted = LinkedListNode(None)
    curr_sorted = head_sorted

    while curr1 or curr2:
        if curr1 is None:
            curr_sorted.next = curr2
            break
        elif curr2 is None:
            curr_sorted.next = curr1
            break
        elif curr1.data < curr2.data:
            curr_sorted.next = LinkedListNode(curr1.data)
            curr1 = curr1.next
            curr_sorted = curr_sorted.next
        elif curr1.data > curr2.data:
            curr_sorted.next = LinkedListNode(curr2.data)
            curr2 = curr2.next
            curr_sorted = curr_sorted.next
        elif curr1.data == curr2.data:
            curr_sorted.next = LinkedListNode(curr1.data)
            curr_sorted.next.next = LinkedListNode(curr2.data)
            curr1 = curr1.next
            curr2 = curr2.next
            curr_sorted = curr_sorted.next.next
        curr_sorted.next = None

    # Remove dummy start node
    head_sorted = head_sorted.next

    return head_sorted
