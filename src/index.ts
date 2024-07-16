const world = 'world';

function hello(whom: string = world): string {
  return `Hello ${whom}!`;
}

export let helloworld = () : string => hello(world.toUpperCase());
console.log(helloworld)
