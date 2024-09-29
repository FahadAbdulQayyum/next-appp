"use client"

import { useRouter } from 'next/navigation'
import React from 'react'

const Landing = () => {

    const router = useRouter();

    return (
        <div>
            <button
                className='bg-orange-400 rounded-lg px-3 py-1 hover:scale-95 duration-150 hover:text-black'
                onClick={() => router.push('/location')}
            // onClick={() => router.push('/learn')}
            // onClick={() => router.push('/locations')}
            >Book Now</button>
        </div>
    )
}

export default Landing