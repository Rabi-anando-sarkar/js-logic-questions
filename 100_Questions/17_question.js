//! Write a function to convert a string to camelCase & snake_Case


//* method one

const toCamelCase = (str) => {
    str = str.trim().split(" ")
    let camel = str.map((item,i) => {
        if(i === 0) {
            return item.toLowerCase()
        } else {
            return item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()
        }
    })
    return camel.join("")
}

console.log(toCamelCase('  rabi anando sarkar       '));

const toSnakeCase = (str) => {
    return str.trim().split(" ").map((item) => item.toLowerCase()).join("_")
}

console.log(toSnakeCase('  rabi anando sarkar       '));

