// 4. Copy linked list with arbitrary pointer
// https://www.educative.io/copy-linked-list-with-arbitrary-pointer

// Helper function to get a random integer between 1 and n
function getRandomInt(n) {
    return Math.floor(Math.random() * n) + 1;
}

// Helper function to create a linked list from an array with arbitrary pointers
function create_linked_list(arr) {
    if (arr.length === 0) return null;

    let head = new Node(arr[0]);
    head.arb = head;
    let current = head;

    for (let i = 1; i < arr.length; i++) {
        current.next = new Node(arr[i]);
        current.next.arb = current;
        current = current.next;
    }

    return head;
}

// Node class representing a linked list node with arbitrary pointer
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.arb = null;
    }
}

// Solution 1: Deep copy a linked list with arbitrary pointers
const deep_copy_arbitrary_pointer = (head) => {
    const hash_old_new = new Map();
    let curr = head;
    let dummy = new Node(null);
    let newCurr = dummy;

    // First pass: clone nodes and build the next pointers
    while (curr) {
        const clone = new Node(curr.data);
        clone.arb = curr.arb;
        newCurr.next = clone;
        hash_old_new.set(curr, clone);
        curr = curr.next;
        newCurr = newCurr.next;
    }

    // Second pass: update the arbitrary pointers
    curr = head;
    newCurr = dummy.next;

    while (curr) {
        newCurr.arb = hash_old_new.get(curr.arb);
        curr = curr.next;
        newCurr = newCurr.next;
    }

    // Remove dummy head
    return dummy.next;
};

// Test

// Create linked list
let list = create_linked_list([1, 2, 3, 4, 5, 6, 20, 34]);
let val = [];
let temp_head = list;
console.log("Linked List");
while (temp_head) {
    val.push(`${temp_head.data} (${temp_head.arb?.data})`);
    temp_head = temp_head.next;
}
console.log(val.join(" -> "));
console.log("");

// Copy the linked list
temp_head = deep_copy_arbitrary_pointer(list);
val = [];
console.log("Copied Linked List");
while (temp_head) {
    val.push(`${temp_head.data} (${temp_head.arb?.data})`);
    temp_head = temp_head.next;
}
console.log(val.join(" -> "));
