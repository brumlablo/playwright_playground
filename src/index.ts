const world = 'world';

export function hello(whom: string = world): string {
  return `Hello ${whom}! `;
}

let helloworld = () : string => hello(world);
console.log(helloworld)
