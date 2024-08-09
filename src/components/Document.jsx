import React from 'react'
import { DOCUMENT_DATA_LIST } from '../utils/helper'

const Document = () => {
  return (
    <div className='min-h-screen flex  items-center'>
      <div className='max-w-[1140px] container mx-auto px-3'>
          {
        DOCUMENT_DATA_LIST.map((item,i) =>(
            <div className='mb-4'>
            <h3 className='text-3xl text-semibold leading-normal text-black mb-2'><span> {++i}.</span> {item.Question}</h3>
            <p className='text-base text-blue max-w-[800px] text-blue-700'> <span className='text-red-700'>ANSWER:</span> {item.Answer}</p>
        </div>
        ))
          }
      </div>
    </div>
  )
}

export default Document
