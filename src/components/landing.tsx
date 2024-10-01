"use client"

import { useRouter } from 'next/navigation'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../lib/store'; // Import the RootState type
import { increment, decrement } from '../lib/features/counter/counterSlice';


const Landing = () => {

    const router = useRouter();

    const count = useSelector((state: RootState) => state.counter?.value);
    console.log('countttt', count);

    // Optional: Use dispatch if you want to modify the count
    const dispatch = useDispatch();


    return (
        <div>
            <button
                className='bg-orange-400 rounded-lg px-3 py-1 hover:scale-95 duration-150 hover:text-black'
                onClick={() => router.push('/location')}
            // onClick={() => router.push('/learn')}
            // onClick={() => router.push('/locations')}
            >Book Now</button>
            <p>Current count: {count}</p>

            {/* Optional buttons to increment/decrement count */}
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    )
}

export default Landing