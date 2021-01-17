import Collections from './Collections';

class CharacterCollection extends Collections {
  public collection: string;

  constructor(data: string) {
    super();
    this.collection = data;
  }

  ascending() {
    this.collection = [...this.collection].sort((a: string, b: string) => (a.charCodeAt(0) - b.charCodeAt(0))).join("");
  }

  descending() {
    this.collection = [...this.collection].sort((a: string, b: string) => (b.charCodeAt(0) - a.charCodeAt(0))).join("")
  }

}

export default CharacterCollection;
