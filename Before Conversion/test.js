const {
  introducePerson,
  FullTime,
  isFulltimeEmployee,
  personToString,
  getProfessions,
} = require("./objects");

const tauhid = {
  name: {
    first: "Mohammad",
    last: "Islam",
  },
  status: FullTime,
  profession: "Engineer and Professor",
};

const john = {
  name: {
    first: "John",
    last: "Snow",
  },
  status: FullTime,
  profession: "Night's Watch",
};

// console.log(introducePerson());
console.log(introducePerson(john));
console.log(introducePerson(tauhid));

console.log(isFulltimeEmployee(tauhid));

console.log(personToString(tauhid));

console.log(
  getProfessions({
    1: tauhid,
  })
);
