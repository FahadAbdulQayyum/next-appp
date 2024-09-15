"use client"

import React, { useEffect, useState } from 'react'

const Counter = () => {

    const [num, setNum] = useState<number>(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setNum(num => num + 1)
        }, 1000)

        return () => clearInterval(timer);

    }, [])

    return (
        <div>
            {num}
        </div>
    )
}

export default Counter
