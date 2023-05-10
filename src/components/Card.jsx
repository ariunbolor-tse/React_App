import React from 'react'
import '../index.css'

const Card = (props) =>{
    return(
        <div className='w-screen pt-8 px-12'>
            <div className='p-8 flex w-full border rounded-md border-blue-400 bg-blue-100'>
            <div className='w-1/4'>
                <div className="bg-contain bg-center bg-no-repeat h-80 w-80"
                    style={{
                    backgroundImage:
                    `url(${props.image})`,
                    }}>
                </div>
            </div>
            <div className='px-12'>
            <div className='pb-4 font-serif text-md'>ID: {props.id}</div>
            <div className='pb-4 font-serif text-md'>TITLE: {props.title}</div>
            <div className='pb-4 font-serif text-md'>PRICE: {props.price}</div>
            <div className='pb-4 font-serif text-md'>CATEGORY: {props.category}</div>
            <div className='pb-4 font-serif text-md'>DEDCRIPTION: {props.description}</div>
            <div className='pb-4 font-serif text-md'>RATE: {props.rate}</div>
            <div className='pb-4 font-serif text-md'>COUNT: {props.count}</div>
            </div>
            </div>
        </div>
    )
}
export default Card;