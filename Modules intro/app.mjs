// {---------------Module Object Wrapper--------
    let name    = 'Custom App'
    let version = '1.3.0'

//}---------------Module Object Wrapper---------

import {name as authorName, email} from './author.mjs'
import { Card } from './Card.mjs'

let card = new Card (
    `${name} (${version})`,
    `${authorName}: ${email}`,
    `#112234`
)

let infoDiv = document.querySelector('#info')
card.render(infoDiv)
// console.log('App', name)
// console.log('ver.:', version)
// console.log('author:', authorName, email)