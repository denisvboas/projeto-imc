 export function notNumber(value){
    return isNaN(value) || value == ""
}

export function imcCalculate(weight, height) {
    return (weight / ((height / 100) **2)).toFixed(2)
}