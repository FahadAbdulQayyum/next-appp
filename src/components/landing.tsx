"use client"

import { useRouter } from 'next/navigation'
import Loader from './loader';

const Landing = () => {

    const router = useRouter();

    const routeTo = (address: string) => {
        // router.push('/location')
        router.push(address)
    }

    return (
        <div>
            <button
                className='bg-orange-400 rounded-lg px-3 py-1 hover:scale-95 duration-150 hover:text-black'
                // onClick={() => router.push('/location')}
                onClick={() => routeTo('./location')}
            // onClick={() => router.push('/learn')}
            // onClick={() => router.push('/locations')}
            >Book Now</button>
        </div>
    )
}

export default Landing