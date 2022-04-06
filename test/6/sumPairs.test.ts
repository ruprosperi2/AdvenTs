import { describe, expect, test } from "vitest"
import sumPairs2 from "../../src/exercises/2/sumPairs2"

describe("test int sumPairs.ts", () => {
  test("should return 3 and 7 ", () => {
    // const data = [3, 5, 7, 2]
    // const result = 10

    // const data = [-3, -2, 7, -5]
    // const result = 10

    // const data = [2, 2, 3, 1]
    // const result = 4

    // const data = [6, 7, 1, 2]
    // const result = 8

    const data = [0, 2, 2, 3, -1, 1, 5]
    const result = 6

    const response = sumPairs2(data, result)

    expect(response).toEqual([1, 5])
  })
})
