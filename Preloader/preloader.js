// progress like preloader component


// common preloader logic
class BasePreloader {
    constructor(rootDiv) {
        this.rootDiv = rootDiv

        // init
        this.init()

        this.onload()
    }

    onload() {
        this.timerId = setInterval(()=> {
            this.step()
            if(this.condition()){
                clearInterval(this.timerId)
            }
            this.rootDiv.innerHTML = this.render()
        }, 500)
    }
    // abstract methods
    condition() {}
    step() {}
    render() {}
    init() {}
}


class ProgressPreloader extends BasePreloader{
    constructor(rootDiv) {
        super(rootDiv)
        /* super(): =>
        this.rootDiv = rootDiv
        this.onload()
        */
        
        //this.progress = 0 // 0..100
    }

    // onload() {
    //     this.timerId = setInterval(()=> {
    //         this.progress +=10
    //         if(this.progress >=100){
    //             this.progress = 100
    //             clearInterval(this.timerId)
    //         }
    //         this.rootDiv.innerHTML = `[ ${this.progress}% ]`
    //     }, 500)
    // }

    // Overriding methods
    init() {
        this.progress = 0 // 0..100
    }

    condition() {
        return this.progress >=100
    }

    step() {
        this.progress +=10
    }

    render() {
        return `[ ${this.progress}% ]`
    }
}

class CircularPreloader extends BasePreloader {
    constructor(rootDiv) {
        super(rootDiv)
        //this.duration = 3000
        //this.frames = ['|', '/', '--', '\\']  // JS string character escaping
        //this.onload()
    }

    // onload() {
    //     this.timerId = setInterval(()=> {
    //         this.duration -=250
    //         if(this.duration <=0){
    //              clearInterval(this.timerId)
    //         }
    //         //round shift
    //         let frame = this.frames.shift()
    //         this.frames.push(frame)
    //         console.log(this.frames.join(' '))
    //         this.rootDiv.innerHTML = `[ ${frame} ]`
    //     }, 250)
    // }

    // Overriding methods
    init() {
        this.duration = 3000
        this.frames = ['|', '/', '--', '\\']
    }

    condition() {
        return this.duration <=0
    }

    step() {
        this.duration -=250
        let frame = this.frames.shift()
        this.frames.push(frame)
    }

    render() {
        return `[ ${this.frames[0]} ]`
    }
}

let pp1 = new ProgressPreloader(window['prel-1'])
let pp2 = new CircularPreloader(window['prel-2'])

