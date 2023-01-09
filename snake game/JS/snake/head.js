class Head {
    constructor(x=0, y=0, dir) {
        this.x = x
        this.y = y
        this.dir = dir
    }

    render() {
        return `
        <div 
        style="
                width: 64px;
                height: 64px;
                background: url(images/snake.png);
                background-position-x: -192px;
                position: absolute;
                top: ${this.y*64}px;
                left: ${this.x*64}px;
            "
        ></div>
        `

    }
}