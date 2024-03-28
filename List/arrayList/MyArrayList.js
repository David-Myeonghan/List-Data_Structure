const ListInterface = require('../ListInterface');

class MyArrayList extends ListInterface {
    count = 0;
    objectList = [];

    #DEFAUT_CAPACITY = 10;
    #ERRIR_NUM = -999;

    constructor(size) {
        super();
        if (size) new Array(size);
        this.superobjectList = new Array(this.#DEFAUT_CAPACITY);
    }

    insertElement(index, data) {
        if (this.count >= this.DEFAUT_CAPACITY) {
            console.error('Not enough memory!');
            return;
        }
        // 0 보다 작은 인덱스 불가
        // 배열 빈칸 있을 수 없다. -> 중간이 비어있고, 중간 다음에 넣으려고 할 때,
        if (index < 0 || index > this.count) {
            console.error('Insert position error');
            return;
        }
        // 정상
        if (index == this.count) {
            objectList[count++] = data;
            return;
        }
        // element 이동이 있을 때, 맨 뒤(-1)에서부터 옮겨야 한다.
        for (let i = this.count - 1; i >= index; i--) {
            this.objectList[i+1] = this.objectList[i];
        }
        this.objectList[index] = data;
        this.count++;

    }
    
    addElement(data) {
        if (this.count >= this.DEFAUT_CAPACITY) {
            console.error('Not enough memory!');
            return;
        }
        this.objectList[this.count++] = data;
    } 
    
    removeElement(index) {
        if (this.isEmpty()) {
            console.error('No element!');
            return null;
        }

        // 가능한 위치인지 확인
        if (index < 0 || index >= this.count) {
            console.error('Remove position error');
            return;
        }

        const element = this.objectList[index];

        for (let i = index; i < this.count - 1; i++) {
            this.objectList[i] = this.objectList[i + 1];
        }
        this.count--;
        return element;
    };

    getElement (index) {
        return this.objectList[index];
    };

    getSize() {
        return this.count;
    };

    isEmpty() {
        if (this.count === 0) {
            return true;
        }
        return false;
    };

    removeAll() {
        this.objectList = new Array(this.#DEFAUT_CAPACITY);
    };

    printAll() {
        if (this.count === 0) {
            console.error('Array is Empty!');
            return;
        }
        for (let i = 0; i < this.count; i++) {
            console.log(this.objectList[i]);
        }
    }

}

module.exports = MyArrayList;