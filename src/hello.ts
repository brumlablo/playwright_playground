
const world = 'world';
export function hello(whom: string = world): string {
  return `Hello ${whom}!`;
}
export const helloworld = (): string => hello(world.toUpperCase());
