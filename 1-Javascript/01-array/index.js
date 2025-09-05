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
    console.log(arr3);
}