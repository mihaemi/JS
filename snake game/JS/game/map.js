class Map {

    // size of the map in 64 x 64 px

    constructor(width=10, height=10) { // arguments default values
        this.width = width
        this.height = height

        this.children = []  // all the objects on the map
    } 

    render(root) {
        let html = `<div id="map" style="
            width: ${this.width*64}px;
            height: ${this.height*64}px;">`

        for(let y=0; y<this.height; y++) {
            for(let x=0; x<this.width; x++){
                html += `<div>${x}:${y}</div>`

            }
        }
        for(let i=0; i<this.children.length; i++){
            html += this.children[i].render()
        }
        


        html += `</div>`
        root.innerHTML = html

    }
    

}