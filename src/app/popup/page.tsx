"use client"

import LowerPopUp from './lowerPopup';
import UpperPopUp from './upperPopup';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../lib/store'; // Import the RootState type

const Page = () => {
    const obj = useSelector((state: RootState) => state.counter?.obj);

    return (
        <div>
            {(obj && obj.productName.length) ?
                <>
                    <UpperPopUp />
                    <LowerPopUp />
                </> : ''}
        </div>
    )
}

export default Page
