function isPrime(number) {
    if (number < 2) {
        return false;
    }
    
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 5) {
            return false;
        }
    }
    
    return true;
}

console.log(isPrime(5)); 
console.log(isPrime(10));
