//! TODO: Simple Bar Chart from Array Data

//* method one

const generateBarChart = (arr) => {
    const newArr = arr.map((curEle,index) => {
        let star = '';
        let num = 0
        while(num < curEle) {
            star = star + "*"
            num++
        }
        return `${index+1}: ${star}`
    })
    return newArr.join('\n')
}

console.log(generateBarChart([3,5,7,2]));

//* method two 

const genBarChart = (arr) => {
    return arr.map((curEle, index) => {
        return `${index+1}: ${"*".repeat(curEle)}`
    }).join('\n')
}

console.log(genBarChart([3,5,7,2]));