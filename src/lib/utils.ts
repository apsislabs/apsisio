import { Person } from "./types";

export const getFirstName = (person: Person) => splitFirstName(person.name);

export const splitFirstName = (fullName: string) => fullName.split(" ").at(0);
