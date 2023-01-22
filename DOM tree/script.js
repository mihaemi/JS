class Element {
  constructor(tagName) {
    this.tagName = tagName
    // reference to other elements
    this.parent = null
    this.children = []
    this.prev = null
    this.next = null
  }

  render() {
    let childFragment = ``
    this.children.forEach(child => childFragment += child.render())

    return `<${this.tagName}>${childFragment}</${this.tagName}>`
  }

  appendChild(child) {
    if (child instanceof Element){
    this.children.push(child)
    } else {
        console.error("should be Element")
    }
  }
  
  removeChild(child) {
    if(child instanceof Element){
        for (let i=0; i<=this.children.length; i++){
            if(Object.is(this.children.indexOf(child), i)){
                return this.children.shift(child)
            }
        }
    } else {
        console.error("should be Element")
    }
  }
}

let root = new Element('html')
root.children.push(new Element('head'))
root.children.push(new Element('body'))
console.log(root.render())

let parent = new Element("div")
let h1 = new Element("h1")
parent.appendChild(h1)
parent.appendChild(new Element("p"))
parent.removeChild(h1)
parent.removeChild(new Element("p"))
  
console.log(parent.render())