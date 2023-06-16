let fruits = new Map;
fruits.set("apple", "green")
fruits.set("strawberry", "red")
fruits.set("blueberry", "blue")

fruits.forEach(function(value1, value2){
    console.log(`Ключ - ${value2}, Значение - ${value1}`);
})