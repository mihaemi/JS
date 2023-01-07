// module that has the logic

// (CRUD):
// - add 
// - show 
// - update
// - remove


// DOM helpers
const newElement = (type, classList = [], children = []) => {
    let element = document.createElement(type)
    classList.forEach(className => element.classList.add(className))

    children.forEach(child => element.appendChild(child))
    return element
}

const newTextNode = (text) => {
    return document.createTextNode(text)
}


// CRUD functions

const addUser= (data, selector) => {
    let root = document.querySelector(selector)
    root.appendChild(
        newElement('tr', [], 
            Object.keys(data[0])
                .map(
                (key, index )=> {
                    let input = newElement('input')
                    let button = newElement('button')  
                        input.setAttribute('placeholder', key)
                        

                    let children = [
                        input 
                    ]
                    if(index == 2){
                        children.push(button )
                    }
                    
                    
                    button.addEventListener('click', () => {
                        alert( )
                        let name = document.getElementsByTagName('input')[0].value
                        let birthDate = document.getElementsByTagName('input')[1].value
                        let blocked = document.getElementsByTagName('input')[2].value
                        
                        console.log(`Name: ${name} , Birth date: ${birthDate}, Blocked: ${blocked}`)
                    })
                     
                    return newElement('td', [], children)
                    
                     
                    // HW1: in the last TD add a button next to the input
                    //      with the inner text 'Save'
                    //      add an addEventListener which will show an alert when clicking this button
                    //      collect 3 values each from an input .value
                    //      show them in console

                    
                } )
        )                
    )
     
}


const showAsTable = (data, selector ) => {
    let root = document.querySelector(selector)

    root.appendChild(
        newElement('table', ['data-table'],
            data.map(user => newElement('tr', [], 
                Object.values(user).map(value => newElement('td', [], [newTextNode(value)]))
            ))
        )
    )
    
    }
showAsTable(data, 'section')

// adding class to table:
// table.classList.add('data-table')

// const showAsTable = (data, selector ) => {
//     let root = document.querySelector(selector)

//     let table = newElement('table', ['data-table'], [
//         newElement('tr', [], [
//             newElement('td', [], [
//                 document.createTextNode('Some Text')
//             ]),
//             newElement('td', [], [
//                 document.createTextNode('Another Text')
//             ])
//         ]),
//         newElement('tr', [], [
//             newElement('td', [], [
//                 document.createTextNode('Some Text')
//             ]),
//             newElement('td', [], [
//                 document.createTextNode('Another Text')
//             ])
//         ])
//     ])
//     root.appendChild(table)
//     }



