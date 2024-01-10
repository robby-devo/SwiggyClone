import React, { useState } from 'react'
import ItemList from './ItemList'

const RestaurantCategory = ({data,showItems,setShowIndex,index}) => {
    console.log("RestaurantCategory",data)


    const handleClick = () =>{
        return (
            // setShowIndex()
            console.log("index",index),
            setShowIndex(showItems ? null : index)

            // setShowItems(!showItems)
            // console.log("clicked")
        )
    }
  return (
    <div>
        {/* Header */}

        <div className='w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 '>

           <div className='flex justify-between cursor-pointer' onClick={handleClick}>

           <span className='font-bold text-lg'>{data.title} ({data.itemCards.length})</span>
            <span>&pound;</span>
           </div>
         

         {showItems &&   <ItemList items={data.itemCards} />}


        </div>

        {/* Accordion Header */}


    </div>
  )
}

export default RestaurantCategory