import React from 'react'

function TopNav() {
    return (
        <nav>
            <ul className='flex cursor-pointer flex-1 justify-end mr-5 mt-3 text-xs sm:text-sm gap-3'>
                <li>Post a job</li>
                <li>|</li>
                <li>Subscribe</li>
                <li>|</li>
                <li>Advertise</li>
                <li>|</li>
                <li>Bulletins</li>
                <li>|</li>
                <li>Register</li>
                <li>|</li>
                <li>Sign in</li>
            </ul>
        </nav>
    )
}

export default TopNav