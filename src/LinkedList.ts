import OrderBy from './OrderBy';

class Node {
  next: Node | null = null;
  data: number;

  constructor(data: number) {
    this.data = data;
  }
}

class LinkedList extends OrderBy {
  collection: any;
  head: Node | null = null;

  constructor() {
    super();
  }

  get length(): number {
    if (!this.head) {
      return 0;
    }

    let counter = 1;
    let node = this.head;

    while (node.next) {
      counter++;
      node = node.next;
    }

    return counter;
  }

  add(data: number): void {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
      return;
    }

    let tail = this.head;

    while (tail.next) {
      tail = tail.next;
    }

    tail.next = node;
  }

  // TODO
  
  // public set _data(collection : number) {
  //   this._data = this.collection;
  // }
  // let cek: any = this.data;
  
  

  print(): void {
    if (!this.head) {
      return;
    }

    let node: Node | null = this.head;
    let res = [];
    while (node) {
      res.push(node.data);
      node = node.next;
    }

    console.log(res.join(" -> "));
  }

  ascending() {
    let pointer = this.head;
    while (pointer) {
      if (pointer.next && pointer.data > pointer.next.data) {
        const tmp = pointer.data;
        pointer.data = pointer.next.data;
        pointer.next.data = tmp;
        pointer = this.head;
      } else {
        pointer = pointer.next;
      }
    }
  };

  descending() {
    let pointer = this.head;
    while (pointer) {
      if (pointer.next && pointer.data < pointer.next.data) {
        const tmp = pointer.data;
        pointer.data = pointer.next.data;
        pointer.next.data = tmp;
        pointer = this.head;
      } else {
        pointer = pointer.next;
      }
    }
  };
}

export default LinkedList;
