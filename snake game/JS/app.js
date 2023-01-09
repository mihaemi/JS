let snake = new Snake(3,5)

let map = new Map()
let apple1 = new Apple(3,3)
let apple2 = new Apple(7,5)


map.children.push(apple1)
map.children.push(apple2)
map.children.push(snake)

map.render(container)

setInterval( () =>{
    snake.move()
    map.render(container)
},1000)

const userAction = (e) => {
    console.log(e)
    switch(e.code) {
        case 'ArrowUp': snake.children[0].dir = 'up'; break;
        case 'ArrowRight': snake.children[0].dir = 'right'; break;
        case 'ArrowDown': snake.children[0].dir = 'down'; break;
        case 'ArrowLeft': snake.children[0].dir = 'left'; break;
    }
}