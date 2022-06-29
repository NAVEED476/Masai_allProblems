function max_occuring(arr){
    if(arr.length==0){
        return null
    }

    // in the above i am checking that if my length is 0 then it will return null

    let obj={}
    let max_ele = arr[0] 
    let count =1

    for(let i=0;i<arr.length;i++){
        let element = arr[i]
        if(obj[element]==null){
            obj[element]=1
        }
        else{
            obj[element]++
        }

        if(obj[element]>count){
            max_ele = element
            count = obj[element]
        }
    }
    console.log(max_ele)
}

let arr = [0,0,0,1,1,,3,4,24,5]
max_occuring(arr)