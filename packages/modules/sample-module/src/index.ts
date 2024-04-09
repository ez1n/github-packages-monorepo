import { hello } from "@ez1n/sample-util";

export const bye = (value: string) => {
  const helloValue = hello(value);
  return `${helloValue} bye ${value}`;
};