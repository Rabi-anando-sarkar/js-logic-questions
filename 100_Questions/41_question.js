//! TODO: Simple currency converter

const rates = {
    USD: 1, // base price
    EUR: 0.9,
    GBP: 0.8,
    INR: 82,
}

const convertCurrency = (amt,fromAmt,toAmt) => {
    // from amount in USD
    let amtInUSD = 0;

    if(fromAmt !== "USD") {
        amtInUSD = amt/rates[fromAmt]
    } else {
        amtInUSD = amt
    }
    
    let convertAmt = 0;

    if(toAmt !== "USD") {
        convertAmt = amt*rates[toAmt]
    } else {
        convertAmt = amtInUSD
    }

    return convertAmt
}

console.log(convertCurrency(100, "USD", "INR"));
