function getRandom(min,max){
    func=Math.floor(Math.random()*(max-min+1))*5;
    return func
}
console.log(getRandom(0,100))