import React, { useContext} from 'react'
import Context from './ContextAPI'

export default function Filter() {
    const { state, dispatch } = useContext(Context)
  
    function productFunc(e) {
        const filteredProduct = state.data.filter(p => p.product_name === e.target.value)
        dispatch({
            type: "filteredData",
            payload: filteredProduct
        })
        dispatch({
            type: "productName",
            payload: e.target.value
        })
    }
    
    function stateFunc(e) {
     const filteredState=state.newData.filter(element => element.address.state === e.target.value)
     dispatch({
        type: "filteredData",
        payload: filteredState
    })
      
    }

    function cityFunc(e) {
        const filteredCity =state.newData.filter(element => element.address.city === e.target.value)
        dispatch({
            type: "filteredData",
            payload : filteredCity
        })
    }


    return (
        <div className="bg-darkish w-72 ml-20 h-80 -mt-24 p-9 flex flex-col  rounded-xl">
            
            <h5 className="text-grayish text-lg border-b h-10 ">Filters</h5>
            <div className="flex flex-col mt-6  ">
                <select onChange={productFunc} className="cursor-pointer bg-selectcolor text-white h-10 rounded-lg pl-2 focus:outline-none " name="products" >
                        <option disabled selected value="">Products</option>
                        {state.data.map(products => (
                            <option >{products.product_name}</option>
                        ))} 
                            
                </select>
                <select  onChange={stateFunc} className="cursor-pointer bg-selectcolor text-white h-10 rounded-lg pl-2 focus:outline-none mt-5 mb-5" name="state" >
                        <option disabled selected value="">State</option>
                        {state.newData.map(stateData => (
                            <option >{stateData.address.state}</option>
                        ))} 
                </select>
                <select  onChange={cityFunc} className="cursor-pointer bg-selectcolor text-white h-10 rounded-lg pl-2 focus:outline-none" name="city" >
                        <option disabled selected value="">City</option>
                        {state.newData.map(cityData => (
                            <option className="">{cityData.address.city}</option>
                        ))} 
                </select>
            </div>
            
        </div>
    )
}
