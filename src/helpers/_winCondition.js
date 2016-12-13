import R from 'ramda'

const testO = R.equals(['O', 'O', 'O'])
const testX = R.equals(['X','X','X'])
const f = R.either(testO, testX)
const win = [[0,1,2], [0,3,6], [1,4,7], [2,5,8], [3,4,5], [6,7,8], [0,4,8], [2,4,6]]

export default arr => {
  let hasWon = false
  win.map(a => {
    if(f([arr[a[0]], arr[a[1]], arr[a[2]]])) hasWon = arr[a[0]]
  })

  return hasWon
}
