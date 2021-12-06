
import React,{useContext} from 'react'
import Card from './Card'
import Context from './ContextAPI'


export default function CardList() {

    const { state,} = useContext(Context)
    
    
    return (
      
        <div className=" flex rounded-2xl overflow-x-auto overflow-y-hidden h-72 w-50 -mt-40 bg-darkish ml-100 p-6">
                 
                    {state.newData?.map(d => (
                        <Card date={d.date} st={d.address.state} location={d.address.city} brandName={d.brand_name} productName={d.product_name} price={d.price} image={d.image} discription={ d.discription}/>
                    ))}
            
        </div>
     
    )
}
