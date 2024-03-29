class ListNode {

	#data;
	#next;
	
    constructor(data = null, link = null) {
        // if (!data && !link) {
        //     this.#data = null;
        //     this.#next = null;
        //     return;
        // } else if (data && !link) {
        //     this.#data = data;
        //     this.#next = null;
        //     return;
        // } else if (data && link) {
        //     this.#data = data;
        //     this.#next = link;
        //     return;
        // }
        // more concise in 2-line:
        this.#data = data;
        this.#next = link;
    }

    // getter/setter required for accessing private field.
    setNext(next) {
        this.#next = next;
    }
    getNext() {
        return this.#next;
    }
    
	getData(){ 
		return this.#data;
	}
}

module.exports = ListNode;
