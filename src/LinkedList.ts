class Node {
  next: Node | null = null;
  data: number;

  constructor(data: number) {
    this.data = data;
  }
}

class LinkedList {
  head: Node | null = null;

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
        this.swap(pointer, pointer.next);
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
        this.swap(pointer, pointer.next);
        pointer = this.head;
      } else {
        pointer = pointer.next;
      }
    }
  };

  private swap(x : Node, y : Node) {
    if (x === y || x === undefined || y === undefined) return;
    const previous_x = this.find_previous_node(x);
    const previous_y = this.find_previous_node(y);
    if (previous_x !== undefined) {
      previous_x.next = y;
    } else { 
      this.head = y
    };
    if (previous_y !== undefined) {
      previous_y.next = x;
    } else {
      this.head = x;
    } 
    const temp = x.next;
    x.next = y.next;
    y.next = temp;
  };

  private find_previous_node(node : Node) {
    let previous_pointer = undefined;
    let pointer = this.head;
    while (pointer != undefined && pointer != node) {
      previous_pointer = pointer;
      pointer = pointer.next;
    }
    return previous_pointer;
  };
}

export default LinkedList;
