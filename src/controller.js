export default class Controller {
    static calc(a,b) {
        return a - b
    }


    constructor(name) {
        this.name = name
    }


    log() {
        let arr = [5,4,32,78,9]
        console.log(arr.sort(Controller.calc))
    }
}


