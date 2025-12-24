import { classNames } from "./classNames";

export function cn(...inputs: Array<string | undefined | null | false>) {
  return classNames(...inputs);
}
