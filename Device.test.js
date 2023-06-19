import{sum, power, reverseString} from './testBox.js';

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

describe(
  "reverse string test",
  () => {
    it ("reverse(\"abcd\") eq \"dcba\"", () => {
      expect(reverseString("abcd")).toBe("dcba")
    }),

    it ("reverse(\"1  2  3 \") eq  \" 3  2  1\"", () => {
      expect(reverseString("1  2  3 ")).toBe(" 3  2  1")
    }),

    it ("reverse polyndrom (\"evil ded live\") eq  \"evil ded live\"", () => {
      expect(reverseString("evil ded live")).toBe("evil ded live")
    })
  }
)