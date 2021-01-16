abstract class OrderBy {
  abstract length: number;
  // Add additional abstract when needed
  abstract collection: any;
  // abstract data: any;

  ascending(): void {
    // TODO
    // console.log(this.collection.sort((a,b) =>  (a > b ? 1 : -1)));
    // const ascending: any= this.collection.sort((a,b) =>  (a > b ? 1 : -1));
    // console.log(ascending);
    // try {
    //   const ascending: number = this.collection.sort((a: number, b: number) => (a > b ? 1 : -1));
    //   // console.log(ascending);
    //   this.collection = ascending;
    // } catch (error) {
    //   const ascending: string = [...this.collection].sort((a: string, b: string) => (a.charCodeAt(0) - b.charCodeAt(0))).join("");
    //   // console.log(ascending);
    //   this.collection = ascending;
    // }

    if (typeof this.collection === 'object') {
      const ascending: number = this.collection.sort((a: number, b: number) => (a > b ? 1 : -1));
      this.collection = ascending;
    } else if (typeof this.collection === 'string') {
      const ascending: string = [...this.collection].sort((a: string, b: string) => (a.charCodeAt(0) - b.charCodeAt(0))).join("");
      this.collection = ascending;
    } else {
      this.collection = 'OK!'
    }

  }

  descending(): void {
    // TODO
    // console.log(this.collection.sort((a,b) => (a > b ? -1 : 1)));
    // const descending: any= this.collection.sort((a,b) => (a > b ? -1 : 1));
    // console.log(descending);
    // try {
    //   const descending: number = this.collection.sort((a: number, b: number) => (a > b ? -1 : 1));
    //   // console.log(descending);
    //   this.collection = descending;
    // } catch (error) {
    //   const descending: string = [...this.collection].sort((a: string, b: string) => (b.charCodeAt(0) - a.charCodeAt(0))).join("");
    //   // console.log(descending);
    //   this.collection = descending;
    // }

    if (typeof this.collection === 'object') {
      const descending: number = this.collection.sort((a: number, b: number) => (a > b ? -1 : 1));
      this.collection = descending;
    } else if (typeof this.collection === 'string') {
      const descending: string = [...this.collection].sort((a: string, b: string) => (b.charCodeAt(0) - a.charCodeAt(0))).join("");
      this.collection = descending;
    } else {
      this.collection = 'OK!'
    }

  }
}

export default OrderBy;
