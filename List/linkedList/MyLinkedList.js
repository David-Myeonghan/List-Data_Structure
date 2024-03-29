const ListInterface = require('../ListInterface');
const ListNode = require('./ListNode');

// Single Linked List
class MyLinkedList extends ListInterface {

    // The first node
    #head;

    count;

    constructor() {
        super();
        this.#head = null;
        this.count = 0;
    }

    insertElement(index, data) {
        // let i;
        const tempNode = this.#head;
        const newNode = new ListNode(data);

        // insert하기 적절한 위치인가
        if (index < 0 || index > this.count) {
            console.error(`index error. The number of element in this list is ${this.count}.`);
            return;
        }
        // 첫번째 들어갈 때
        if (index === 0) {
            newNode.setNext(this.#head);
            this.#head = newNode;
        } 
        // 중간에 들어갈 때
        else {
            let previousNode = null;
            for (let i = 0; i < index; i++) {
                previousNode = tempNode;
                tempNode = tempNode.getNext();
            }
            // 새로운 노드에 먼저 이전 노드가 가리키던 다음 노드를 저장해야한다. <- 안그럼 끊어짐.
            // 그리고 새로운 노드를 이전노드의 다음걸로 지정한다.
            newNode.setNext(previousNode.getNext());
            previousNode.setNext(newNode);
        }
        this.count++;
        return;
    };
    
    addElement(data) {
        // data를 가진 listNode가 있어야 한다.
        let newNode;

        // 맨 앞에 위치로 들어갈 경우
        if (this.#head === null) {
            newNode = new ListNode(data);
            this.#head = newNode;
        }
        // 맨 마지막으로 들어갈 경우: 맨 마지막 노드를 찾아서 그 뒤에 넣어준다.
        else {
            newNode = new ListNode(data);
            let temp = this.#head;

            while(temp.getNext() !== null) {
                temp = temp.getNext();
            }
            temp.setNext(newNode);
        }
        this.count++;

    };

    removeElement(index) {
        // let i;
        let tempNode = this.#head; // 삭제되는 요소. GC에 의해 해제될 것.

        if (index < 0 || index >= this.count) {
            console.error(`index error. The number of element in this array is ${this.count}.`)
            return null;
        }
        if (index === 0) {
            this.#head = tempNode.getNext();
        }
        // 중간 위치일 때,
        else {
           let previousNode = null;
           for (let i = 0; i < index; i++) {
            previousNode = tempNode;
            tempNode = tempNode.getNext();
           } 
           previousNode.setNext(tempNode.next);
        }
        this.count--;
        return tempNode.getData();

    };
    
    getElement (index) {
        let resultElement = this.#head;
        if (index >= this.count) {
            console.error(`index error. The number of element in this array is ${this.count}.`);
            return;
        }
        if (index === 0) {
            return this.#head.getData();
        }
        for (let i = 0; i < index; i++) {
            resultElement = resultElement.getNext();
        }
        return resultElement.getData();

    };
    
    getNode (index) {
        let resultNode = head;

        if (index >= count) {
            console.error(`index error. The number of element in this array is ${this.count}.`);
            return;
        }
        if (index === 0) {
            return this.#head;
        }
        for (let i = 0; i < index; i++) {
            resultElement = resultElement.getNext();
        }
        return resultElement;
    };

    getSize() {
        return this.count;
    };
    
    isEmpty() {
        return this.#head === null
    };
    
    removeAll() {
        this.#head = null;
        this.count = 0;
    };
    
    printAll() {
        if (this.count === 0) {
            console.log('Vacant List.');
        }
        let tempNode = this.#head;
        while(tempNode !== null) {
            console.log(tempNode.getData());
            tempNode = tempNode.getNext()
            if (tempNode !== null) {
                console.log('->');
            }
        };
    };

    reverseList () {
        if (this.#head === null) return;

        let currentNode = null;
        let previousNode = null;
        let nextNode = this.#head;

        while(nextNode !== null) {
            previousNode = currentNode;
            currentNode = nextNode;
            nextNode = nextNode.getNext();
            currentNode.setNext(previousNode);
        }
        this.#head = currentNode;
    }
};

module.exports = MyLinkedList;