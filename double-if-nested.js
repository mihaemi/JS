//two factor authentication

let userName = prompt('Enter username:')

if (userName == 'PrettyUser' || 
    userName == 'JustUser' || 
    userName == 'User' ) {

    let smsCode = +prompt('Confirm SMS code: ')

    if (smsCode === 12345) {
        console.log(`Welcome, ${userName}`)
    } else {
        console.log('Wrong confirmation code!')
    }
} else {
    console.log('Wrong username!')
}


    // HW1: try to validate 3 usernames
    // HW2: add the 1st else: 'wrong username'
    // HW3: add the 2nd else: 'wrong conf code'
    // HW4: update the diagram