import { App } from "./index"

describe('App.start()', () => {
  it('should return the correct message when called', () => {
    expect(App.start()).toBe('Hello WORLD!')
  })

})
