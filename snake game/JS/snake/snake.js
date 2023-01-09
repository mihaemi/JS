// [Snake] > parent > [Head]

class Snake {
    // when creating a new snake > attach a head to it
    constructor(x, y, dir='right') {

        // snake segments/elements
        this.children = []
        this.children.push(new Head(x, y, 'right'))
        this.children.push(new Body(x, y+1, 'up'))
        this.children.push(new Tail(x, y+2, dir))


        // this.head = new Head(x, y, dir)
        // this.body = new Body(x, y+1, dir)
        // this.tail = new Tail(x, y+2, dir)
    }

    move() {
        this.children.reverse()
        this.children.forEach( (s,i) => {
            if(i == this.children.length - 1) {
            if(s.dir == 'up') {s.y--} 
            if(s.dir == 'right') {s.x++}
            if(s.dir == 'down') {s.y++}
            if(s.dir == 'left') {s.x--}
            } else {
                s.x = this.children[i+1].x
                s.y = this.children[i+1].y

            }
        })
        this.children.reverse()
        // for (let i=0; i<this.children.length; i++){
        //     this.children[i].y--
        // }
           
    }

    // when rendering the Snake, also render the head
    render() {
        let html = ' '
        for (let i=0; i<this.children.length; i++){
            html+= this.children[i].render()
        }



        // return (
        // this.head.render() +
        // this.body.render() +
        // this.tail.render()
        // )
        return html
    }
}