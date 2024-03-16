const INITIAL_STATE = {
    result: 0,
}
function calcReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'CALC_ADD':
            return {
                ...state,
                result:` ${action.input1} + ${action.input2} = ${action.input1+action.input2}`
            }
        case 'CALC_SUB':
            return {
                result:` ${action.input1} - ${action.input2} = ${action.input1-action.input2}`

            }
        case 'CALC_DIV':
            return {
                result:` ${action.input1} % ${action.input2} = ${action.input1/action.input2}`

            }
        case 'CALC_MUL':
            return {
                result:` ${action.input1} * ${action.input2} = ${action.input1*action.input2}`

            }
            default:
                return{
                    ...state
                }
    }
}


export default calcReducer