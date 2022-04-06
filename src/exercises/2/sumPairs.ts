const sumPairs = (data: number[], result: number): number[] | null => {
  let response: number[] | null = null
  let isEqual: boolean = false

  for (let i: number = 0; i <= data.length; i++) {
    const firstElement = data.shift()
    const dataClone = [...data]

    if (!isEqual) {
      for (let j: number = 0; j <= dataClone.length - 1; j++) {
        console.log(
          `elemento actual: ${firstElement} + valor ${
            dataClone[j]
          } es igual a: ${firstElement + dataClone[j]}`
        )
        if (firstElement + dataClone[j] === result) {
          response = [firstElement, dataClone[j]]
          isEqual = true
        }
        console.log("valor de J:", j)
        console.log("data: ", data.length)
      }
    }
  }

  return response
}

export default sumPairs
