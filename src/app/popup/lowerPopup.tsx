"use client"

import { useRouter } from 'next/navigation';

const LowerPopUp = () => {

    const router = useRouter();

    return (
        <span>
            <div
                className='bg-orange-400 flex items-center text-black justify-center py-2 font-bold hover:cursor-pointer active:scale-75 duration-1000'
                style={{
                    borderRadius: '0 0 10px 10px'
                }}
                onClick={() => router.push('/checkout')}
            >Checkout
            </div>
        </span>
    )
}

export default LowerPopUp
