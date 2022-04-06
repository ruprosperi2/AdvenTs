const sumPairs = (data: number[], result: number): number[] | null => {
  const dataClone = [...data]
  let response: null | number[] = null
  let isEqual: boolean = false

  data.forEach((valueData) => {
    dataClone.shift()

    dataClone.forEach((valueDataClone) => {
      if (!isEqual) {
        if (valueData + valueDataClone === result) {
          response = [valueData, valueDataClone]
          isEqual = true
        }
      }
    })
  })

  return response
}

export default sumPairs
