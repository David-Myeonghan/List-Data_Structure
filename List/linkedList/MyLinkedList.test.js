const MyLinkedList = require('./MyLinkedList');

function main() {
    const list = new MyLinkedList();

    list.addElement("A");
    list.addElement("B");
    list.addElement("C");

    //list.removeElement(3);
    list.printAll();
    list.reverseList();
    list.printAll();


    list.removeElement(0);
    list.removeElement(0);
    list.printAll();

    list.insertElement(0, "A-1");
    list.printAll();
    console.log(list.getSize());

    list.removeElement(0);
    list.printAll();
    console.log(list.getSize());

    list.removeAll();
    list.printAll();
    list.addElement("A");
    list.printAll();
    console.log(list.getElement(0));
    list.removeElement(0);
}

main();