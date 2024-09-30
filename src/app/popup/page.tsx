"use client"

import React from 'react';
import { useRouter } from 'next/navigation';

const Popup = () => {
    const router = useRouter();
    return (
        <div
            // className='absolute bg-red-500 right-8 bottom-1 p-2 rounded-lg'
            className='fixed bg-red-500 right-8 bottom-6 p-2 rounded-lg active:scale-105'
        >
            <button
                onClick={() => router.push('/calendars')}
            >
                2 Services - $340
            </button>
        </div >
    )
}

export default Popup
