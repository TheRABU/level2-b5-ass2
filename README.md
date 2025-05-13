## What is the difference between interface and Types in Typescript?

- Type

=> Type is a collection of data in Ts which can have any type of data which also can be modified by Any, Built-in, User defined etc. Type can have primitive data types,tuples and unions. Here are some of the features below which differentiate between Type and Interface

- Type uses the Type keyword
- More flexible as it can combine multiple types
- More flexible for Union, intersection, primitives
- Can handle more complex type of structure

  Example code:

  ```
  type User {
      name: string;
      age: number;
      likesFood: boolean;
  }

  type OwnsCat {
      catName: string;
      email: string;
  }
  type userWhoOwnsCat = User & OwnsCat;

  const showResult: userWhoOwnsCat = {
      name: "Tonmoy shaha";
      age: 21;
      likesFood: true;
      catName: "Minu";
      email: "user@user.com";
  }
  console.log(showResult);

  ```

- Interface

=> Interface on the other hand does similar kind of thing just the syntax are different. It uses a " Extend " method. here some key features of Interface below:

- uses a Interface keyword
- compatible method with OOP based programming
- provides a way of structuring methods, object,property,values
- 2 interfaces with same name will get merged

Example code of an Interface

```

   interface WebDeveloper {
       skills: string;
       experience: number;
   }

   interface WebDeveloper {
       knowsPhp: boolean;
   }

   const result: WebDeveloper = {
       skills: "html", "css", "javascript", "react";
       experience: 2;
       knowsPhp: false;
   }
   console.log(result)


```

## What is the use of the keyof keyword in TypeScript? Provide an example.

- keyof

=> keyof is a keyword which is used to extract the keys of a type (object) as a union of string literal types. When working with a generic structure it gives safe access to object properties.

```
interface Person {
 name: string;
 age: number;
}

type PersonKeys = keyof Person;

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
 return obj[key];
}

const person: Person = { name: "Ratan Tata", age: 60 };

const personName = getProperty(person, "name");
const personAge = getProperty(person, "age");

console.log(personName);
console.log(personAge);
```

In this code above keyof Person creates a type PersonKeys that is a union of the keys "name" and "age".

The getProperty function uses a generic type K keyof T. This provides type safety when accessing properties dynamically.
