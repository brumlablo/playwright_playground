/* eslint-disable no-undef */
import { helloworld } from "./hello";

export class App {
  public static start() {
    return helloworld();
  }
}

console.log(App.start())

// document.addEventListener("DOMContentLoaded", function() {
//   sayHello();
// });

// const sayHello = (): void => {
//   setTimeout(function() {
//       // eslint-disable-next-line no-undef
//       const greeting: HTMLElement = document.createElement("p");
//       greeting.innerText = App.start();
//       document.getElementById('greeting_info')?.appendChild(greeting);
//   }, 3000)
// }
