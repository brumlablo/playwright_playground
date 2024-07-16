import { helloworld } from './index'

describe('helloworld()', () => {
  it('should return the correct message when called', () => {
    expect(helloworld()).toBe('Hello WORLD!')
  })

})
