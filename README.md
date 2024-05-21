# npm-storage
## Secure your lists, arrays.

Usage (Set Item) (Secure Array In an local storage)
```js
// Set item
const { NPStorageSetItem } = require('npm-storage')

const arr = [1,2,3,4,5]
const secureArray = NPStorageSetItem(arr)
console.log(secureArray._arr)

//Or create an array with set item itself
const secureArray2 = NPStorageSetItem([1,2,3,4,5])
console.log(secureArray2._array)
```

Usage (Create Item) (Create an secure array)
```js
const { NPStorageCreateItem }

const secureArray = NPStorageCreateItem([1,2,3,4,5])
console.log(secureArray._items)

```