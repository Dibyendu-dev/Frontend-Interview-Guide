// console.log("array in js");

const mixedArr = [5,"ddas",5.2,true,{name:"ddas",age:29}];

    // index = The position of an element in the array is known as its index.
    // index starts with 0
    // index end with length - 1

// console.log(mixedArr);

const salad = ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"];

// console.log(salad);

function Car(...model){
    this.model =model;
}

const mycar =new Car("audi x1","ddas")
// console.log(mycar);

 const anotherSalad = new Array("🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑");

//  console.log(salad === anotherSalad);

// const two = new Array(2);
const two = new Array(2,5);
//  console.log(two);

 const three = new Array(3).fill(null);
 three[0]=3
//  console.log(three)

// const element = array[index]

// console.log(salad[3]);

for(i=0; i<= salad.length-1; i++){
    // console.log(`${salad[i]} at index ${i}`);
}

// push() => insert element at end of the array ==> it changes or mutate the orginal array
//  and return the current length of the array
salad.push("penut");
// console.log(`${salad}`);

// unshift() => insert element at start of the array, also return the len. of array
salad.unshift("cashew");
//  console.log(`${salad}`);

// pop() => it removes element at end of the Array, it also mutates the orginal array 
// and returns the remove elem
const elem =salad.pop();
// console.log(salad);

// shift() => remove element at start of the array, also return the remove elem
// it also mutates the orginal array, so no new array created
const elem2 = salad.shift();
// console.log(elem2);
// console.log(salad);

// slice() => copy ,but it will not mutates the orginal array , but creates a new arr
const saladCopy = salad.slice();
// console.log(salad === saladCopy) //false

const isarr =Array.isArray(salad); //true
// console.log(isarr);

// array destructuring ==> extracting the values of the arr and assign them into individual variable
{
     const salad = ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"];

    // const tomato = salad[0];
    // const mushroom = salad[1];
    // const carrot = salad[5];

    const [tomato,mushroom,carrot] = ['🍅', '🍄', '🥕']
    // console.log(tomato,mushroom,carrot)
}

{
    const [tomato,mushroom = "🍄"] = ['🍅']
    // console.log(tomato);
    // console.log(mushroom);
}

{
    const [tomato, , carrot]= ['🍅', '🍄', '🥕'];
    // console.log(tomato);
    // console.log(carrot);
}

{
    // nested array
    let fruits = ['🍈', '🍍', '🍌', '🍉', ['🍅', '🍄', '🥕']];
    // console.log(fruits[4][2]);
}

{
    // rest ==> used for destructuring arr,obj
    //  spread ==> create a copy of arr or obj

    const [first, second , ...remarr] = [1,2,3,4,5,6,7,8,9]
    // console.log(first);
    // console.log(second);
    // console.log(remarr);

    const mySalad = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
    const newSalad = [...mySalad]
    // console.log(mySalad ===newSalad); // false

}

{
    // swaping
    let first = '1';
    let second = '2';

    [first,second] = [second,first]
    // console.log(first)
    // console.log(second)

    // merge
    const arr1 = [1,2,3];
    const arr2 = [4,5,6];
    const arr3 = [...arr1, ...arr2]
   // console.log(arr3);
}

{
    // length ==> it is proprtty not methods , so dont use length()
    const arr = [1,5,8,9]
    // arr length ==> upto 2 **32 -1
    arr.length = 0; // remove all elements from the arr
    // console.log(arr.length);
}

{
    // concat() ==> returns new array
    const arr1 = [1,2,3];
    const arr2 = [4,5,6];
    const arr3 = [7,8,9]
    const mergearr = arr1.concat(arr2, arr3);
    // console.log(mergearr);

}

{
    // join() ==> needs to separate onl elem to next elem
    const emotions = ["🙂", "😍", "🙄", "😟"];
    const joinEmo = emotions.join(" : ")
    // console.log(joinEmo);

    // [].join() // return ""

}

{
    // fill()
  const arr = new Array(5).fill("pink");
    //   console.log(arr)
}

{
    // includes() ==> return true/false , and check whether the given elem present or not
    // it also case sensative
    
    const names = ["tom", "alex", "bob", "john"];
    // console.log(names.includes("ddas"));
}

{
    // indexOf() ==>Returns the index of the first occurrence of a value if it present in an array,
    //  or -1 if it is not present.
      const names = ["tom", "alex", "bob", "tom"];
    //   console.log(names.indexOf("bob"))
    // console.log(names.indexOf("ddas"))
    // console.log(names.lastIndexOf("tom")) // return index of last occurance
}

{
    //    reverse() => modify the org arr
    const names = ["tom", "alex", "bob", "john"];
    // console.log(names.reverse())
}

{
    // sort() ==> he default sort() method converts the element types into string, order is assending
    const names = ["tom", "alex", "bob"];
    // console.log("After default sorting", names.sort());

     let ages = [2, 1000, 10, 3, 23, 12, 30, 21];

    //   console.log(
    //     "age with default sorting",
    //     ages.sort(function (a, b) {
    //         return a === b ? 0 : a > b ? 1 : -1;
    //     }))
 
}

{
    // splice()  => splice(start, deleteCount , item, item2, item3)

    const names = ["tom" ,"alex","bob"]
    // console.log(names.splice(0,2)); // [ 'tom', 'alex' ]
    //  console.log(names.splice(0,2, "john"));
    //  console.log(names) // [ 'john', 'bob' ]
     names.splice(1,0,"zack")
    //  console.log(names); [ 'tom', 'zack', 'alex', 'bob' ]
}

{
    // at()
    const junkFoodILove = ["🥖", "🍔", "🍟", "🍕", "🌭", "🥪", "🌮", "🍿"];
    // console.log(junkFoodILove.at(0))
    // console.log(junkFoodILove.at(1))
    // console.log(junkFoodILove.at(-1))
    // console.log(junkFoodILove.at(-5))
    // console.log(junkFoodILove.at(3))
    // console.log(junkFoodILove.at(8))

}

{
    // flat()
    const arr1 = [1,2,3,4,[5,6,[7,[8,9]]]]
    // console.log(arr1.flat()); // [ 1, 2, 3, 4, 5, 6, [ 7, [ 8, 9 ] ] ]
    // console.log(arr1.flat(Infinity)) 
}

{
   // grouping 

   const employees = [
        { name: "Bob", dept: "Engineering", salary: 5000 },
        { name: "Alex", dept: "HR", salary: 3000 },
        { name: "Ravi", dept: "Engineering", salary: 7000 },
        { name: "John", dept: "Engineering", salary: 1000 },
        { name: "Tom", dept: "Sales", salary: 6000 },
    ];

   const newEmp = Object.groupBy(employees,({dept})=>dept);
   const newEmp1 = Object.groupBy(employees,({salary}) => (salary> 5000 ? "More than 5k" : "less than 5k"))
    //    console.log(newEmp1);
}

{
    // toReversed() => doesn't change the org array
    const arr = [1, 2 , 3 , 4]
   const  newarr = arr.toReversed();
    // console.log(newarr);
    // console.log(arr);
}

{
    // toSorted();
    const arr = ['a','b','c','d']
    arr.reverse();
    const newArr = arr.toSorted();

    // console.log(arr);
    // console.log(newArr);
}

{
    // toSpliced()
    const months = ["Jan", "Mar", "Apr", "May"];
    const newM = months.toSpliced(1,0,"feb");

    // console.log(months)
    // console.log(newM);
} 

{
    // with()
    const arr = [1, 2 , 3 , 4]
    // const newArr = arr.with(2,55);
    const newArr = arr.with(-2,55);
    // console.log(newArr);
}

{
    // array like ==> e.g- arguments, htmlcollection,nodelist
    // {key: "value"} // object
    // [1,2,3] // array

      const arr_like = { 0: "I", 1: "am", 2: "ddas", length: 3 };
        // console.log( arr_like[2])    
        // console.log(arr_like.length) 
        // console.log(Array.isArray(arr_like)) 
        // console.log(arr_like instanceof(Object)) 

    function checkargs () {
        //   console.log("Array Like Args", arguments);
          const argArr = [...arguments];
        // console.log("Converetd Arary Args", argArr);
         argArr.forEach((elem) => {
            // console.log(elem);
        });
    }
    checkargs(5,12,15,156)

   
    const new1 = Array.from(checkargs)
    // new1.forEach((elem) => (console.log(elem)));
}

{
   // of()

   const a = new Array(1,2,3,4,5,6);
   const b = [7,8,9]

   const c = Array.of(a,b, true)
    //    console.log(c[1]);
    //    console.log(Array.isArray(c))
}



