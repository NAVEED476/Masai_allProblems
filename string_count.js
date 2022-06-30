let name = "naveed"

function string_count(str){
    let mat = []
    for(let i=0;i<str.length;i++){
        let count = 0
        for(let j=0;j<str.length;j++){
            if(str[i]==str[j]){
                count++
            }

        }
        mat.push(str[i],count)
        count =0


    }
    console.log(mat)
}
string_count("naveed")

function string_count_obj(str){
    let obj={}
    for(let i=0;i<str.length;i++){
        if(obj[str[i]]==undefined){
            obj[str[i]] = 1
        }
        else{
            let prev = obj[str[i]]
            obj[str[i]] = prev+1
        }
    }
    console.log(obj)
}

string_count_obj("naveed")


function unique_normal(str){
    let mat = []
    for(let i=0;i<str.length;i++){
        let count = 0
        for(let j=0;j<mat.length;j++){
            if(str[i]==mat[j]){
                count++
            }
        }
        if(count == 0){
            mat.push(str[i])
        }
    }
    console.log(mat)
}
unique_normal("navveeewwrd")

function unique(str){
    let obj={}
    for(let i=0;i<str.length;i++){
        obj[str[i]] = undefined

    }
    console.log(Object.keys(obj))
}
unique("naveedshaik")