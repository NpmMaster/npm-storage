const storage = require('local-storage')


class NPStorageSetItem {
    
       
    constructor(array = []) {
         
         
        this._array = array
         
          
        this._array.forEach((f) => {
        
           
            storage.set(`${f}I`, `${f}`)
            return (storage.get(`${f}I`))
           
        })
       
      
    }
    
}

class NPStorageCreateItem {
  constructor (items) {
    this._items=items
    this._items.forEach(element => {
        storage.set(`${element}I`, `${element}`)
        return (storage.get(`${element}I`))
    });
  }    
}

module.exports = {
    NPStorageSetItem,
    NPStorageCreateItem
}