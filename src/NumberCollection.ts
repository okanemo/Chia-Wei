import Collections from './Collections';

class NumberCollection extends Collections {
  public collection: number[];

  constructor(data: number[]) {
    super();
    this.collection = data;
  }

  ascending() {
    this.collection.sort((a: number, b: number) => (a > b ? 1 : -1));
  }

  descending() {
    this.collection.sort((a: number, b: number) => (a > b ? -1 : 1));
  }

}

export default NumberCollection;
