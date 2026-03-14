class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList {

    constructor() {
        this.head = null;
    }

    add(data){

        let newNode = new Node(data);

        if(this.head === null){
            this.head = newNode;
            return;
        }

        let current = this.head;

        while(current.next !== null){
            current = current.next;
        }

        current.next = newNode;

    }

}