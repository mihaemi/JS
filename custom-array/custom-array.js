// aka Array class
// OOP
// callbacks

class NumberContainer {
    //HW1: try to set initial values through constructor
    constructor(val_0, val_1, val_2) {
        this.val_0 = val_0
        this.val_1 = val_1
        this.val_2 = val_2
    }
    get length () {
        // if (this.val_0 == undefined) {
        //     return 0
        // } else if (this.val_1 == undefined) {
        //     return 1
        // } else if (this.val_2 == undefined) {
        //     return 2
        // } else {
        //     return 3
        // }

        for (let i=0; i<3; i++) {
            if (this[`val_${i}`] == undefined) {
                return i
            }
        }
        return 3
    }

    //HW2: try to avoid anything else than numbers
    push( number ) {
        if (typeof(number) === 'number'){
        if (this.length == 3){
            return console.error('Container Full')
        }
        this[`val_${this.length}`] = number
        } else {
            console.error('Not a number')
        }
        // if (this.length == 0)
        // this.val_0 = number
        // else if (this.length == 1)
        // this.val_1 = number
        // else if (this.length == 2)
        // this.val_2 = number
        // else console.error ("Container FULL")
    }
    forEach( cb ) {

        // this works like a loop
        // if (this.length > 0){
        //     cb(this.val_0)
        // }
        // if (this.length > 1){
        //     cb(this.val_1)
        // }
        // if (this.length > 2){
        //     cb(this.val_2)
        // }
        for(let i=0; i<this.length; i++){
            cb(this[`val_${i}`])
        }
    }
    //HW3: try to do a forEachReverse(cb(val))

    forEachReverse(cb) {
        if (this.length > 0) {
            cb(this.val_2)
           }
        if (this.length > 1) {
            cb(this.val_1)
           }
        if (this.length > 2) {
            cb(this.val_0)
           }
    }

    reduce( cb, initVal ) {

        //HW4: optimize using for loop
        let acc = initVal
        // this works like a loop
        // if (this.length > 0){
        //     acc = cb(this.val_0, acc)
        // }
        // if (this.length > 1){
        //     acc = cb(this.val_1, acc)
        // }
        // if (this.length > 2){
        //     acc = cb(this.val_2, acc)
        // }
        // return acc
        for (let i=0; i<this.length; i++) {
            acc = cb (this[`val_${i}`, acc])
        }
        return acc
    }
    
}



/*
Container for max 3 numbers

----------------------------------
|                                 |  < .push (number)
|                                 |
|   val_0     val_1      val_2    |
|                                 |
|                                 |  > .length
|                                 |  > .forEach( cb( val ))
|                                 |  > /reduce(cb(val, acc))
----------------------------------



*/