import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function /* The `parseServerActionResponse` function takes a generic type `T` as its input
parameter, which represents the response from a server action. It then converts this
response into a JSON string using `JSON.stringify`, and immediately parses it back
into a JavaScript object using `JSON.parse`. This process effectively creates a deep
copy of the original response object, ensuring that any nested objects or arrays are
also duplicated. This can be useful for scenarios where you need to work with a
fresh copy of the server response without modifying the original data. */
parseServerActionResponse<T>(response:T){
  return JSON.parse(JSON.stringify(response));
}