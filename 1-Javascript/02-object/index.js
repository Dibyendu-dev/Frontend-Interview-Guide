let user = {
    name: "ddas",
    age: 29,
    "is admin": true
}

// console.log(user);
// console.log(user.name);
// console.log(user["age"]);
// console.log(user["is admin"]);

user.class = "1st";  // asign a value in obj.
// console.log(user);

delete user["is admin"]
// console.log(user);

// constructor fn.
function Car(brand, model){
    this.brand = brand;
    this.model = model;
}

 const mycar =new Car("Audi","x1")
//  console.log(mycar);

// console.log(mycar instanceof Car);

const preson = new Object();
preson.name = "lalu"
preson.age = 85
// console.log(preson)

// factory

function createUser (name,age){
    return{
        name,
        age,
        grret: function hreet(){
            console.log("hello")
        }
    }
}

const dd = createUser("dads",29)
// console.log(dd);
// dd.grret()

const profile = {
    name: "ddas",
    company: "not working",
    message: function () {
        return (`${this.name} needs for work`);
    },
    address: {
        city:"e.b",
        pin: 732101,
        state: "w.b",
        food: ["paneer","curd","fish","coffee"]
    }
}

// for ..in loop

for(let key in profile){
    // console.log(key);
    // console.log(profile[key]);
}

// console.log(profile.address.food[0])
// console.log(profile.message())
// console.log(Object.keys(profile))
// console.log("salary" in profile)
// console.log(profile.message())

let f1 = {name: "mango"}
let f2 = {name: "mango"}

//  

 f1 = f2

// console.log(f1==f2)
// console.log(f1===f2)

// object static method

const target = {a:1,b:2};
const source = {c:3,d:4};

const com = Object.assign(target,source)
// console.log(com);
// console.log(target);
// console.log(source);

const obj = {name: "ddas"};
const obj2 = Object.assign({},obj);

// console.log(obj2)
// console.log(obj===obj2)

const obj3={ a:1,b:{c:2}};
const obj4 = Object.assign({},obj3)
// console.log(obj4)
// obj4.b.c =5

// console.log(obj3.b.c)
// console.log(obj4.b.c)

const obj5 = structuredClone(obj3);

obj5.b.c =9
// console.log(obj5.b.c)
// console.log(obj3.b.c)

const myobj = {
    name: "ddas",
    age:29
}
const myarr = Object.entries(myobj)
// console.log(myarr);

const entries = new Map([
    ["foo", "bar","ddas"],
    ["baz", 42, 13],
]);
const objEntries = Object.fromEntries(entries)
// console.log(objEntries);


const emp = {
    sal: 100
}

Object.freeze(emp);

emp.sal = 200;
emp.name = "Alex";
delete emp.sal;

console.log(emp)

console.log(Object.isFrozen(emp));


const dept = {
    name: "finance"
}

Object.seal(dept);

dept.address = "Bangalore"
delete dept.name;

dept.name = "HR"
console.log(dept)

// hasOwn

console.log(Object.hasOwn(dept, "address"))
console.log(Object.hasOwn(myobj, "age"))
