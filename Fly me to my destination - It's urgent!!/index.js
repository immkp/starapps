function minNumberOfPlanes(airports) {
  //left most reachable point
  let leftWindow = 0
  //rightmost reachable point
  let rightWindow = 0
  //Minimum number of planes i.e plane count
  let count = 0

  //wheather right most reachable point can be equal to last index of airports array
  while (rightWindow < airports.length - 1) {
    let reachable = 0
    for (let i = leftWindow; i <= rightWindow; i++)
      //Maximum reachable point from current index
      reachable = Math.max(reachable, i + airports[i])

    //update the values i.e change the window size
    leftWindow = rightWindow + 1
    rightWindow = reachable

    //Boundry Condition
    if (leftWindow > rightWindow) return -1

    count++
  }

  return count
}

console.log(minNumberOfPlanes([2, 1, 2, 3, 1]))
