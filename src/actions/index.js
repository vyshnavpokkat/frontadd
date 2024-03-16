export function calcadd(input1,input2) {
    return {
        type: "CALC_ADD",
        input1,
        input2
    };
}
export function calcsub(input1,input2) {
    return {
        type: "CALC_SUB",
        input1,
        input2
    };
}
export function calcdiv(input1,input2) {
    return {
        type: "CALC_DIV",
        input1,
        input2
    };
}
export function calcmul(input1,input2) {
    return {
        type: "CALC_MUL",
        input1,
        input2
    };
}