function find_country(arr,target){
    for(let i=1;i<=arr.length;i++){
        if(arr[i]===target){
            return i
        }
    }
}
let arr = ["Russia","USA","Japan","China","India"]
console.log(find_country(arr))  

