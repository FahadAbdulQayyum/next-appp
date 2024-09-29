import React from 'react'
import services from './services.json';
import Image from 'next/image';

const Page = () => {
    return (
        <div>
            <h1>Choose your services as much you can</h1>
            <div
                // className='flex'
                // className='grid grid-cols-4'
                // className='grid grid-cols-10'
                // className='grid grid-cols-12'
                className='grid grid-cols-8'
            >
                {services.map(v => <div
                    className='bg-orange-400 m-1 flex flex-col justify-center items-center rounded-md
                    hover:bg-orange-200 duration-1000 transition-colors cursor-pointer hover:text-black
                    '
                >
                    <Image src={v.imageUrl} alt={v.name} width={100} height={100}
                        className='bg-cover'
                    />
                    <small>
                        {v.name}
                    </small>
                    <p>
                        {'$' + v.price}
                    </p>
                </div>)}
            </div>
        </div>
    )
}

export default Page
