
export enum Status{
  FullTime,
  Temporary,
}
type Person = {
  name: {
    first: string,
    middle?: string,
    last: string,
  },
  status: Status,
  profession: string,
}

export const introducePerson = (person? : Person) =>
  `Hello ${person?.name?.first ?? "FirstDefault"} ${person?.name?.middle ?? " # "} ${person?.name?.last ?? "LastDefault"}`;

export const isFulltimeEmployee = (person: Person) => person.status === Status.FullTime;

export const personToString = (
  person: Person= {
    status: Status.FullTime,
    name: {
      first: "unknown",
      last: "unknown",
    },
    profession: "unknown",
  }
) => JSON.stringify(person, null, 2);

type PersonMap = {[key: number]: Person};
export const getProfessions = (personMap:PersonMap) =>
  Object.values(personMap)
    .map(({ profession }) => profession)
    .join("\n");
