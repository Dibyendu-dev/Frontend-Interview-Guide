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

// console.log(f1==f2)
// console.log(f1===f2)

 f1 = f2

// console.log(f1==f2)
// console.log(f1===f2)