var users = [
  {
    firstName: "Om",
    lastName: "Balapure",
    age: 25,
    gender: "M",
    score: 88,
  },
  {
    firstName: "Anikta",
    lastName: "Mungal",
    age: 25,
    gender: "F",
    score: 39,
  },
  {
    firstName: "Sumedh",
    lastName: "Pande",
    age: 26,
    gender: "M",
    score: 68,
  },
  {
    firstName: "Satyam",
    lastName: "Balapure",
    age: 22,
    gender: "M",
    score: 98,
  },
  {
    firstName: "Harish",
    lastName: "Balapure",
    age: 29,
    gender: "M",
    score: 63,
  },
  {
    firstName: "Nikita",
    lastName: "Patil",
    age: 25,
    gender: "F",
    score: 29,
  },
];

/* Iterating using a for loop */
for (let i = 0; i < users.length; i++) {
  console.log(
    users[i].firstName,
    users[i].lastName,
    users[i].age,
    users[i].gender,
    users[i].score
  );
}

console.log("######################################################");

/* Iterating using a for in loop */
// NOTE: Iterate over properties of an object
var person = {
  firstName: "Om",
  lastName: "Balapure",
  age: 25,
  gender: "M",
  score: 100,
};

for (let x in person) {
  console.log(person[x]);
}

console.log("######################################################");

/* Iterating using a for of loop */
for (const user of users) {
  console.log(user.firstName, user.lastName, user.age, user.gender, user.score);
}

console.log("######################################################")

/* Iterating using a forEach loop */
users.forEach((user) => {
  console.log(user.firstName, user.lastName, user.age, user.gender, user.score);
});