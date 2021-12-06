import React from 'react'

export default function Card({ productName, brandName, image, price, discription, date, location}) {
    
    const cleanDate =date.slice(0, 10)
    const reverseDate = cleanDate.split("-").reverse().join("-")

    return (
        <div className="flex flex-col rounded-md h-56  min-w-cardwidth bg-background p-2 mr-6  ">
            <div className="flex">
                <div className="">
                    <img className="object-cover h-24 w-24 rounded-md" src={image} alt="p" />
                </div>
                <div className=" flex-col ml-6 text-white">
                    <div className="">{productName}</div>
                    <div className="text-grayish text-sm mt-3 mb-3">{brandName}</div>
                    <div className="">₹{price}</div>
                </div>
            </div>

            <div className=" flex flex-col w-cardwidth text-grayish mt-4 ml-2">
                <div className="flex">
                    <p className="mr-10">{location}</p>
                    <p>date : {reverseDate}</p>
                </div>
                <p className="text-sm mt-2">{discription}</p>
            </div>
           
        </div>
        
    )
}
