{
  // the first function to take a str input and return uppercase or lowercase str.
  function formatString(input: string, toUpper?: boolean): string {
    if (toUpper != false) {
      return input.toUpperCase();
    } else {
      return input.toLowerCase();
    }
  }
  // the output given in task list
  console.log(formatString("Hello")); // Output: "HELLO"
  console.log(formatString("Hello", true)); // Output: "HELLO"
  console.log(formatString("Hello", false)); // Output: "hello"

  // second function
  const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 },
    { title: "Book D", rating: 6.5 },
  ];

  function filterByRating(
    items: { title: string; rating: number }[]
  ): { title: string; rating: number }[] {
    return items.filter((book) => book.rating >= 4);
  }

  console.log(filterByRating(books));

  // third func
  function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.reduce((result, current) => result.concat(current), []);
  }
  console.log(concatenateArrays(["a", "b"], ["c"])); // Output: ["a", "b", "c"]
  console.log(concatenateArrays([1, 2], [3, 4], [5])); // Output: [1, 2, 3, 4, 5]

  // fourth

  class Vehicle {
    private _make: string;
    private _year: number;

    constructor(_make: string, _year: number) {
      this._make = _make;
      this._year = _year;
    }

    getInfo() {
      console.log(`Make: ${this._make}, Year: ${this._year}`);
    }
  }

  class Car extends Vehicle {
    private _model: string;
    constructor(_make: string, _year: number, _model: string) {
      super(_make, _year);
      this._model = _model;
    }
    getModel() {
      console.log(`Model: ${this._model}`);
    }
  }

  const myCar = new Car("Toyota", 2020, "Corolla");
  myCar.getInfo(); // Output: "Make: Toyota, Year: 2020"
  myCar.getModel(); // Output: "Model: Corolla"

  // fifth
  function processValue(value: string | number): number {
    if (typeof value === "number") {
      return value * 2;
    } else {
      return value.length;
    }
  }

  console.log(processValue("hello")); // Output: 5
  console.log(processValue(10)); // Output: 20

  // sixth
  interface Product {
    name: string;
    price: number;
  }
  const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 },
  ];

  function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) {
      return null;
    }

    let expensive = products[0];

    for (let product of products) {
      if (product.price > expensive.price) {
        expensive = product;
      }
    }
    return expensive;
  }

  console.log(getMostExpensiveProduct(products));

  // seventh
  enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }

  function getDayType(day: Day): string {
    if (day === Day.Saturday || day === Day.Sunday) {
      return "Weekend";
    } else {
      return "Weekday";
    }
  }
  console.log(getDayType(Day.Monday)); // Output: "Weekday"
  console.log(getDayType(Day.Sunday)); // Output: "Weekend"

  // eight
  async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (n < 0) {
          reject(new Error("Negative number not allowed"));
        } else {
          resolve(n * n);
        }
      }, 1000);
    });
  }
  console.log(squareAsync(4).then(console.log)); // Output after 1s: 16
  console.log(squareAsync(-3).catch(console.error));
}
