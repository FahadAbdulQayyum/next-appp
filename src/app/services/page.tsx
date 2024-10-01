"use client"

import services from './services.json';
import Image from 'next/image';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../lib/store'; // Import the RootState type
import { incrementt, decrement } from '../../lib/features/counter/counterSlice';


const Page = () => {

    const count = useSelector((state: RootState) => state.counter?.value);
    const obj = useSelector((state: RootState) => state.counter?.obj);

    // Optional: Use dispatch if you want to modify the count
    const dispatch = useDispatch();


    return (
        <div>
            <h1>Choose your services as much you can</h1>
            <div
                className='grid grid-cols-8'
            >
                {services.map(v => <div
                    className='bg-orange-400 m-1 flex flex-col justify-center items-center rounded-md
                    hover:bg-orange-200 duration-1000 transition-colors cursor-pointer hover:text-black
                    '
                    onClick={() => dispatch(incrementt(v))}
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
