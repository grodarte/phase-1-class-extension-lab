// Your code here

class Polygon {
    constructor(array){
        this.sideLengths = array
    }

    get countSides(){
        return this.sideLengths.length
    }

    get perimeter(){
        return this.sideLengths.reduce((accum, side) => {
            return accum += side
        }, 0)
    }
}

class Triangle extends Polygon {
    get isValid(){
        const [a, b, c] = this.sideLengths
        return (a+b>c && b+c>a && a+c>b)
    }
}

class Square extends Polygon {
    get isValid(){
        const [a,b,c,d] = this.sideLengths
        return (a===b && a===c && a===d)
    }

    get area(){
        const [a,b,c,d] = this.sideLengths
        return (a*b)
    }
}