// @ts-ignore
import { describe, expect, test } from "vitest"
import { countSheep } from "../../src/exercises/1/countSheep"

describe("test in countSheep", () => {
  test("should return all sheep with colo red", () => {
    const sheepData = [
      { name: "Noa", color: "azul" },
      { name: "Euge", color: "rojo" },
      { name: "Navidad", color: "rojo" },
      { name: "Ki Na Ma", color: "rojo" },
      { name: "AAAAAaaaaa", color: "rojo" },
      { name: "Nnnnnnnn", color: "rojo" },
    ]

    const sheepResponse = [
      { name: "Navidad", color: "rojo" },
      { name: "Ki Na Ma", color: "rojo" },
    ]

    const response = countSheep(sheepData)

    expect(response).toEqual(sheepResponse)
  })
})
