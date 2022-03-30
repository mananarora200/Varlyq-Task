const genRandomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const genRandom = (n) => {
    let arr = [];
    while(arr.length < n){
        var r = genRandomNumber(50,250);
        if(arr.indexOf(r) === -1) arr.push(r);
    }
    return arr;
}

export default genRandom;