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


// class Node {
//     constructor(data) {
//         this.data =data;
//         this.next = null;
//     }
// }

// class singlyLinklist {
//     constructor(){
//         this.head = null;
//     }
  
//     add (data) {
//         let newNode = new Node(data);

//         if (!this.head) {
//             this.head =newNode;
//             return;
//         }
//         else{
//             let current = this.head;
//             while (current.next) {
//                 current =current.next;
//             }
//             current.next = newNode;
//         }
//     }
//     print(){
//         let current = this.head;
//         while(current) {
//             console.log(current.data)
//             current =current.next;
//         }
//     }
// }

// let newData = new singlyLinklist();
// newData.add(10)
// newData.add(20)
// newData.add(30)
// newData.add(40)
// newData.print()



class Node{
 constructor(data){
   this.data = data
   this.next = null
 }
}

class Linklist {
    constructor(){
        this.head = null;
    }

    insertStart(data){
        let newNode = new Node(data)
        newNode.next = this.head;
        this.head = newNode;
    }

    insertEnd(data) {
        let newNode = new Node(data);

        if (this.head === null) {
            this.head = newNode;
            return;
        } else {
            let current = this.head;
            while (current.next !== null) {
                 current = current.next;
            }
            current.next = newNode;
        }
    }

   insertAtPosition(data, position){

 let newNode = new Node(data)

 if(position === 0 ){
   newNode.next = this.head
   this.head = newNode
   return
 }

 let current = this.head
 let count = 0

 while(count < position - 1){
   current = current.next
   count++
 }

 newNode.next = current.next
 current.next = newNode
}


delete(data){
  let current = this.head;

  if (!this.head) {
     return null;
  }

  if (this.head.data === data) {
      this.head=this.head.next;
      return;
  }

   let previous = null;

   while (current) {
     if (current.data === data) {
        previous.next = current.next;
        return;
     }
     previous = current;
     current= current.next 
   }
}


    print () {
        let current = this.head;
        while (current) {
             console.log(current.data);
             current =current.next;
        }
    }
}

let dataResult = new Linklist();


dataResult.insertAtPosition(3000,0)
dataResult.insertAtPosition(2000,1)
dataResult.delete(2000)
dataResult.print();