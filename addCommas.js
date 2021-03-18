
function addCommas(num) {

    let result = ''

    let str = num.toString();
    for(let i = 0; i < str.length; i++){

        if(i % 3 === 0){ 
            result += str[i]
            result += ','
        }else{
            result += str[i]
        }
    }

    return result.substring(0, result.length-1) 
}

module.exports = addCommas;