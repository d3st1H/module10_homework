let x = false
if(typeof x === 'number') {
    console.log(x + ' - число')
} else {
    if(typeof x === 'boolean') {
        console.log(x + ' - boolean') 
    } else {
        console.log(x + ' - строка')
    }
}