"use client"

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../lib/store'; // Import the RootState type
import { incrementt, decrement } from '../../lib/features/counter/counterSlice';

import { useRouter } from 'next/navigation';

const Popup = () => {

    // const count = useSelector((state: RootState) => state.counter?.value);
    const obj = useSelector((state: RootState) => state.counter?.obj);

    // Optional: Use dispatch if you want to modify the count
    const dispatch = useDispatch();

    const router = useRouter();
    return (
        <div
            // className='absolute bg-red-500 right-8 bottom-1 p-2 rounded-lg'
            className='fixed bg-red-500 right-8 bottom-6 p-2 rounded-lg active:scale-105'
        >
            <button
                onClick={() => router.push('/calendars')}
            >
                {obj && obj.productName.length}
            </button>
        </div>
    )
}

export default Popup
