interface SheepInterface {
  name: string
  color: string
}

export const countSheep = (sheeps: SheepInterface[]) => {
  return sheeps.filter(
    (sheep) =>
      sheep.color === "rojo" &&
      sheep.name.toLowerCase().includes("n") &&
      sheep.name.toLowerCase().includes("a")
  )
}
