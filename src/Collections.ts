abstract class Collections {
  abstract collection: any;

  get size() {
    return this.collection.length;
  }

  abstract ascending() : void;
  abstract descending(): void;

}

export default Collections;
