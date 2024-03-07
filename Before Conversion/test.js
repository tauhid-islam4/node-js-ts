const {
  introducePerson,
  FullTime,
  isFulltimeEmployee,
  personToString,
  getProfessions,
} = require("./objects");

const jack = {
  name: {
    first: "Mohammad",
    last: "Islam",
  },
  status: FullTime,
  profession: "Engineer",
};

// console.log(introducePerson());
console.log(introducePerson(jack));

console.log(isFulltimeEmployee(jack));

console.log(personToString(jack));

console.log(
  getProfessions({
    1: jack,
  })
);
