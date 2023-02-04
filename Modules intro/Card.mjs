// UI Card Component Module
class Card {
    constructor(title, body, color) {
        this.title = title
        this.body  = body
        this.color = color
    }

    render (rootElement) {
        rootElement.innerHTML = `
        <div style="color: ${this.color}; border: 1px solid black; padding: 10px;">
            <h3>
                ${this.title}
            </h3>
            <p>
            ${this.body}
            </p>       
        
        </div      
        `
    }
}

export {Card}