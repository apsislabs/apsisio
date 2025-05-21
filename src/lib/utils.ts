import { ColorVariant, Person } from "./types";

export const getFirstName = (person: Person) => splitFirstName(person.name);

export const splitFirstName = (fullName: string) => fullName.split(" ").at(0);
export const EMAIL_REGEX =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


export const variantToColorVar = (variant: ColorVariant): string | undefined => {
  switch (variant) {
    case "pink":
      return "var(--apsis_fuschia)";
    case "gold":
      return "var(--apsis_orange)";
    case "blue":
      return "var(--apsis_blue)";
    case "green":
      return "var(--apsis_green)";
  }
}
