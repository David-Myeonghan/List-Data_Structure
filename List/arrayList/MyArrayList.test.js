import MyArrayList from './';

function main() {

    const array = new MyArrayList();
    array.addElement(10);
    array.addElement(20);

    array.addElement(30);
    array.insertElement(1, 50);
    array.printAll();
    
    console.log("===============");
    array.removeElement(1);
    array.printAll();
    console.log("===============");

    const array2 = new MyArrayList();
    array2.addElement(10);
    array2.printAll();
    console.log(("===============");
    array2.removeElement(1);
    array2.printAll();
    
    console.log(array.getElement(2));
}

main();