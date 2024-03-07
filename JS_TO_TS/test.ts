import { 
  introducePerson, 
  Status, 
  isFulltimeEmployee, 
  personToString, 
  getProfessions 
} from "./objects";

const tauhid = {
  name: {
    first: "Mohammad",
    middle: "Tauhid",
    last: "Islam",
  },
  status: Status.FullTime,
  profession: "Engineer and Professor",
};

console.log(introducePerson());
console.log(introducePerson(tauhid));

console.log(isFulltimeEmployee(tauhid));

console.log(personToString(tauhid));

console.log(
  getProfessions({
    1: tauhid,
  })
);
