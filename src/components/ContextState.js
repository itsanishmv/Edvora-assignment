import React, {useReducer}from 'react'
import Context from './ContextAPI';
import Reducer from './WithReducer';

function ContextState(props) {
    const initialState = {
        data: [],
        newData:[],
        productname:" "
        
    }
    const [state, dispatch] = useReducer(Reducer, initialState)
    
    return (
        <Context.Provider value={{ state, dispatch }}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextState;
