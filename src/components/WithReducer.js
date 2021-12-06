

function Reducer(state, actions) {
    switch (actions.type) {
        case "filteredData":
            return {
                ...state,
                newData: actions.payload
            }
        case "fetchdata":
            return {
                ...state,
                data: actions.payload
            }
        case "productName":
            return {
                ...state,
                productname:actions.payload
            }
    
        
        default:
            return state
       } 
}

export default Reducer