import{sum, power} from './testBox.js';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
test('adds 1 - 1 to equal 0', () => {
  expect(sum(1, -1)).toBe(0);
});
xtest('add float numbers 0.1 + 0.1 to close to 0.2', () => {
    expect(sum(0.1, 0.2)).toBeCloseTo(0.3,10);
})

describe(
  "test power func",
  () => {
    it ("power 2**3 equal to 8", () => {
      expect(power(2,3)).toBe(8);
    }),

    it ("power 2**19 equal to 524288", () => {
      expect(power(2,19)).toBe(524288);
    })

  }
)