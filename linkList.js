// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// class SinglyLinkedList {

//     constructor() {
//         this.head = null;
//     }

//     add(data){

//         let newNode = new Node(data);

//         if(this.head === null){
//             this.head = newNode;
//             return;
//         }

//         let current = this.head;

//         while(current.next !== null){
//             current = current.next;
//         }

//         current.next = newNode;

//     }

// }


class Node {
    constructor(data) {
        this.data =data;
        this.next = null;
    }
}

class singlyLinklist {
    constructor(){
        this.head = null;
    }
  
    add (data) {
        let newNode = new Node(data);

        if (!this.head) {
            this.head =newNode;
            return;
        }
        else{
            let current = this.head;
            while (current.next) {
                current =current.next;
            }
            current.next = newNode;
        }
    }
    print(){
        let current = this.head;
        while(current) {
            console.log(current.data)
            current =current.next;
        }
    }
}

let newData = new singlyLinklist();
newData.add(10)
newData.add(20)
newData.add(30)
newData.add(40)
newData.print()