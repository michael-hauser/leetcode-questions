// 3. Merge two sorted linked lists
// https://www.educative.io/merge-two-sorted-linked-lists

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Merge two sorted linked lists into one sorted linked list
const merge_sorted = (head1, head2) => {
    let curr1 = head1;
    let curr2 = head2;
    let headSorted = new Node(null); // Dummy node to start the merged list
    let currSorted = headSorted;

    while (curr1 || curr2) {
        if (curr1 === null) {
            currSorted.next = curr2;
            break;
        } else if (curr2 === null) {
            currSorted.next = curr1;
            break;
        } else if (curr1.data < curr2.data) {
            currSorted.next = new Node(curr1.data);
            curr1 = curr1.next;
        } else if (curr1.data > curr2.data) {
            currSorted.next = new Node(curr2.data);
            curr2 = curr2.next;
        } else {
            // Both nodes have the same data
            currSorted.next = new Node(curr1.data);
            currSorted.next.next = new Node(curr2.data);
            curr1 = curr1.next;
            curr2 = curr2.next;
            currSorted = currSorted.next; // Move to the newly added node
        }
        currSorted = currSorted.next;
    }

    // Remove dummy start node
    return headSorted.next;
};


// Helper function to create a linked list from an array
function create_linked_list(arr) {
    if (arr.length === 0) return null;

    let head = new Node(arr[0]);
    let current = head;

    for (let i = 1; i < arr.length; i++) {
        current.next = new Node(arr[i]);
        current = current.next;
    }

    return head;
}

// Test the merge_sorted function
let merge_sort_node_1 = create_linked_list([1, 4, 5, 6]);
let merge_sort_node_2 = create_linked_list([2, 3, 6, 20, 34]);
let merged_sort = create_linked_list([1, 2, 3, 4, 5, 6, 6, 20, 34]);

//Linked List 1
let temp_head = merge_sort_node_1;
let txt = [];
console.log("1st Linked List");
while (temp_head) {
    txt.push(temp_head.data);
    temp_head = temp_head.next;
}
console.log(txt.join(', ') + "\n");

//Linked List 2
temp_head = merge_sort_node_2;
console.log("2nd Linked List");
txt = [];
while (temp_head) {
    txt.push(temp_head.data);
    temp_head = temp_head.next;
}
console.log(txt.join(', ') + "\n");

// Merge the two lists
let result = merge_sorted(merge_sort_node_1, merge_sort_node_2);

//Merged list
temp_head = result;
console.log("Result Merge Sorted List");
txt = [];
while (temp_head) {
    txt.push(temp_head.data);
    temp_head = temp_head.next;
}
console.log(txt.join(', ') + "\n");
