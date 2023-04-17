import React from 'react'
import {Link} from 'react-router-dom'
import Display from './Display'


function Home() {
    return (
        <div>
            <h1>SHOEBOX</h1>
            <Link to={'/display'}>
                <img src='https://cdn.dribbble.com/users/2058848/screenshots/4369325/nikebox_jason.gif' />
            </Link>
        </div>
    )
}

export default Home
