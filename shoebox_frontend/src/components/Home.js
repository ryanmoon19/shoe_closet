import React from 'react'
import {Link} from 'react-router-dom'
import Display from './Display'

function Home() {
    return (
        <>
            <div className='flex-col text-center'>
                <h1 className="mt-5 mb-10 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">SHOEBOX</h1>
                <br/>
                <h4>Click To Open</h4>
                <br/>
                <Link to={'/display'}>
                    <img className='ml-auto mr-auto' src='https://cdn.myportfolio.com/36a5f80a2dd810244b78b89c42e5d00d/26a17e9a-9259-46d9-a9da-496a1dd1b7d9_rwc_0x0x600x600x600.gif?h=dc2883761eaccc51547c4eca5ddc439a' />
                </Link>
            </div>
            
        </>
    )
}

export default Home