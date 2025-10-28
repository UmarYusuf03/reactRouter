import React from 'react'
import {Link} from "react-router-dom"

function Contact() {
  return (
    <div className='py-16 bg-white'>
        <div className='container m-auto px-6 text-white md:px-12 xl:px-6'>
            <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                <div className="md:w-8/12 lg:w-8/12 bg-orange-700 rounded-xl w-10 h-auto p-10">
                    <h1 className='text-4xl font-mono'>Contact Us:</h1>
                    <div class="grid grid-cols-2 gap-3 p-4 px-50">
                        <div className='border-4 border-black p-6 rounded-xl'>01</div>
                        <div className='border-4 border-black p-6 rounded-xl'>02</div>
                        <div className='border-4 border-black p-6 rounded-xl'>03</div>
                        <div className='border-4 border-black p-6 rounded-xl'>04</div>
                    </div>
                </div>
                <div className="md:w-4/12 lg:w-4/12 bg-orange-700 rounded-xl w-10 h-auto p-10">
                    <h1 className='text-4xl font-mono'>Visit Us:</h1>
                    <div class="grid grid-cols-2 gap-3 p-4">
                        <div className='border-4 border-black p-6 rounded-xl'>01</div>
                        <div className='border-4 border-black p-6 rounded-xl'>02</div>
                        <div className='border-4 border-black p-6 rounded-xl'>03</div>
                        <div className='border-4 border-black p-6 rounded-xl'>04</div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact