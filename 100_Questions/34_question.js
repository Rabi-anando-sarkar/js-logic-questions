//! TODO: Remove duplicate elements

function remDup(arr) {
    return [... new Set(arr)]
}

console.log(remDup([1,1,1,1,2,2,2,3,3,3,4,4,4,4,4,'w','w','w','w','w']));

