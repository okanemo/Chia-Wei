abstract class Collections {
  abstract collection: any;

  size() {
    return this.collection.length;
  }

  abstract ascending() : void;
  abstract descending(): void;

}

export default Collections;
