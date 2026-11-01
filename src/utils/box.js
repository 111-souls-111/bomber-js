import { getAllNeighbors } from "./matrix.js";

const appElem = document.getElementById('app')

export class Box {
    constructor(isBomb, coordinates) {
        this.isBomb = isBomb
        this.coordinates = coordinates
    }

    setBoxValue(value) {
        this.value = value
    }

    setBoxType () {

        if (this.isBomb){
            this.setBoxValue("💣")
            return
        }
        const allNeighbors = getAllNeighbors(this.coordinates)
        let bombCount = 0

        allNeighbors.forEach(neighbor => {
            if (neighbor.isBomb) {
                bombCount++
            }
        });

        if (bombCount){
            this.setBoxValue(bombCount)
        }
    }

    createBoxOnArea() {
        const boxElem = document.createElement('div')
        boxElem.classList.add('box')
        boxElem.classList.add('initial')
        boxElem.innerHTML = this.value ?? ''
        
        if (this.value) {
            boxElem.classList.add(`bomb-count-${this.value}`)
        }

        this.boxElem = boxElem
        appElem.appendChild(boxElem)
    }


}

// export function createBox(isBomb, coordinates){
//     const newBox = new Box(isBomb, coordinates)

//     newBox.setBoxType();
//     newBox.createBoxOnArea()
//     return newBox
// }