// const catQuotes = [
//   '...human...why you taking pictures of me?...', // 0
//   '..the catnip made me do it...', // 1
//   '...why does the red dot always get away...' // 2
// ];

// // Get a random number, either 0, 1, 2
// const randomNum = Math.floor(Math.random() * 3);

// // console.log(catQuotes[randomNum]);

// // for (let i = 0; i < 20; i++) {
// //   console.log('Love me, pet me! HSSSSSS!');

// //   // If i is even
// //   // log out a random cat quote
// //   if (i % 2 === 0) {
// //     console.log(catQuotes[randomNum]);
// //   }
// // }



// //////////////////////////////////////////
// // CHECK IF A WORD IS A PALINDROME

// function checkPalindrome(string) {
//   // convert the string to lowercase
//   const lowercaseString = string.toLowerCase();

//   // reverse the string
//   const reversedString = lowercaseString.split('').reverse().join('');
//   console.log(reversedString)

//   // Compare the lowercase string w/ the reversed string
//   return lowercaseString === reversedString
// }

// console.log(checkPalindrome('raDaR'));

///////////////////////////////////////////////////////////////
//
// const myString = 'this is a string';
// myString = 'another string';


// ARRAYS

const groceryList = [
  'eggs',
  'bread',
  'veggies'
]

groceryList.length;


///////////////////////////////////////////////////////////////
// OBJECTS
// const car = ['Toyota', 'Tacoma', 'grey', 2017, true];

const car = {
  make: 'Toyota',
  model: 'Tacoma',
  color: 'grey',
  year: 2017,
  isAutomatic: true,
  age: 2 // age in years
}

// car = {}

/*
CRUD

C - Create
R - Read
U - Update
D - Delete

*/

/////////////////////////////////////////////////////////////////
// ACCESS PROPERTIES ON AN OBJECT
// console.log(car.make);
// console.log(car.year);

/////////////////////////////////////////////////////////////////
// UPDATE A PROPERTY ON AN OBJECT
car.year = 2018;
car.year++;
// car.year--;

/////////////////////////////////////////////////////////////////
// ADD A PROPERTY TO AN OBJECT
car.trunkSize = 10;

/////////////////////////////////////////////////////////////////
// DELETE A PROPERTY FROM AN OBJECT
delete car.trunkSize;

// console.log(car);

//////////////////////////////////////////////////////////////////

const person1 = {
  firstName: 'Jon',
  lastName: 'Smith',
  age: 35,
  favColor: 'blue'
}

const person2 = {
  firstName: 'Jill',
  lastName: 'Smith',
  age: 32,
  favColor: 'purple'
}

person1.favColor;
person2.favColor;

/////////////////////////////////////////////////////////////////
//

const me = {
  firstName: 'Michael',
  lastName: 'Solorio',
  numOfPets: 0,
  isAMorningPerson: true,
  location: {
    city: {
      cityName: 'San Diego',
      neighborhood: 'Point Loma'
    },
    state: 'CA',
    zip: '92107'
  },
  hobbies: ['surfing', 'coding', 'traveling'],
  favColor: 'forest green'
}

// console.log(me.firstName);
// console.log(me.location.city);
// console.log(me.location.city.neighborhood);
// console.log(me.hobbies[1]);
// console.log(me.favColor);

// if (!me.favColor) {
//   me.favColor = { shade: 'dark', hue: 'green' }
// }

// if (me.favColor) {
//   console.log(me.favColor.shade);
// }

// console.log(me.favColor.shade);

////////////////////////////////////////////////////////////
// USING METHODS - A method is a function that is a 
// property of an object
const student1 = {
  firstName: 'Simone',
  lastName: 'Smith',
  numOfPets: 1,
  sayHi: function (newName) {
    if (!newName) {
      newName = 'friend';
    }

    console.log(`Hi, ${newName}. My name is ${student1.firstName}`);
  },
  talkAboutPets: function () {
    console.log(`I have ${student1.numOfPets} pet(s)`);
  },
  addAPet: function () {
    student1.numOfPets++;
    // student1.numOfPets = student1.numOfPets + 1;
  }
}

'Hi Jon, my name is Simone';
'Hi Dorothy, my name is Simone';

student1.sayHi('Jon');
student1.sayHi();
student1.talkAboutPets();
student1.addAPet();
student1.talkAboutPets();

////////////////////////////////////////////////////////////
// BANK ACCOUNT EXAMPLE

const jonsAccount = {
  accountName: 'jon doe',
  total: 100,
  depositMoney: function (depositAmount) {
    jonsAccount.total += depositAmount;
    // 100            += 5
  },
  withdrawalMoney: function (withdrawalAmount) {
    jonsAccount.total -= withdrawalAmount;
  },
  printBalance: function () {
    console.log(`Your total is: ${jonsAccount.total}`);
  },
  sendMoney: function (sendAmount, receiverAccount) {
    receiverAccount.total += sendAmount;
    jonsAccount.total -= sendAmount;
  }
}

const janesAccount = {
  accountName: 'jane doe',
  total: 100,
  depositMoney: function (depositAmount) {
    janesAccount.total += depositAmount;
    // 100            += 5
  },
  withdrawalMoney: function (withdrawalAmount) {
    janesAccount.total -= withdrawalAmount;
  },
  printBalance: function () {
    console.log(`Your total is: ${janesAccount.total}`);
  },
  sendMoney: function (sendAmount, receiverAccount) {
    receiverAccount.total += sendAmount;
    janesAccount.total -= sendAmount;
  }
}

// jonsAccount.printBalance();
// jonsAccount.depositMoney(100);
// jonsAccount.printBalance();
// jonsAccount.withdrawalMoney(50);
jonsAccount.printBalance();
jonsAccount.sendMoney(20, janesAccount);
jonsAccount.printBalance();
janesAccount.printBalance();
janesAccount.sendMoney(5, jonsAccount);
