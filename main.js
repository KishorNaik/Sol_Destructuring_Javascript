// Array Destructing

let numArray = [1, 2];

let [numValue1, numValue2] = numArray;

console.log(numValue1);
console.log(numValue2);


let objArray = [

    {
        "name": "kishor",
        "age": 35

    },
    {
        "name": "yogesh",
        "age": 28
    }
]

for (let { name, age } of objArray) {

    console.log(name);
    console.log(age);

}


// Object Destructing
let personObj = {

    "firstName": "kishor",
    "lastName": "naik"

};

let { firstName, lastName } = personObj;

console.log(firstName);
console.log(lastName);

// Complex Data
let userObj = {
    "fName": "kishor",
    "lName": "naik",
    "communication": {
        "mobileNo": 111111111,
        "emailId": "kishor.naik011.net@gmail.com"
    }
};

let {
    fName,
    lName,
    communication: {
        mobileNo, emailId
    }
} = userObj;

console.log(fName);
console.log(lName);
console.log(mobileNo);
console.log(emailId);