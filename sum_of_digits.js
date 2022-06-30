function sum_of_digits(arr){
    let sum = 0
    while(arr>0){
        sum+=arr%10
        arr=Math.floor(arr/10)
    }
    return sum
}
console.log(sum_of_digits(234))



function reverse(num){
    let reverse=0;
    let lastdigit;
    while(num!=0){
        lastdigit = num%10;
        reverse = reverse*10+lastdigit
        num = Math.floor(num/10)
    }
    return reverse
}   
console.log(reverse(30290))


let rev = 0;
let num = 30290
let lastDigit;

while(num != 0){
	lastDigit = num % 10;
  rev = rev * 10 + lastDigit;
  num = Math.floor(num/10);
}

console.log("Reverse number : "+rev);

