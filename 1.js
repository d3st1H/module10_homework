let a = +prompt("Введите число:")

if (typeof a === 'number' && !isNaN(a)) {
    if (a % 2 === 0) {
        console.log("Четное")
    } else {
        console.log("Нечетное")    
    }
} else {
    console.log("Упс, кажется, вы ошиблись")
}