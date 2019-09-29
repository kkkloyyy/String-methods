
var credentials ={
    username:"Chloe",
    password:"12333"
}

const compare =function(compareFrom,compareTo,caseSensitive){
    let v1
    let v2
    if(caseSensitive){
        v1=compareFrom
        v2=compareTo
    }else{
        v1=compareFrom.toLowerCase()
        v2=compareTo.toLowerCase()
    }

    return v1===v2
}


const login=function(username,password){
    if (typeof username !== "string"||typeof password !=="string"){
        console.log("please enter a string")
        return false
    }
    const checkUsername= compare(username,credentials.username)
    const checkPassword= compare(password,credentials.password)
    if (checkUsername&&checkPassword){
        return true
    }else{
        return false
    }
}

console.log(login("Chloe","123",true))
console.log(login("chloe","12333",false))

