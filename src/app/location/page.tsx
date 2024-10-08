"use client"

import '../globals.css';
import data from '../data/data.json';
import { useEffect, useState } from 'react';

const Page = () => {

    type dt = {
        id: number;
        event: string;
        action: string;
        args: string;
    }[]

    useEffect(() => {
        window.location.reload
    }, [])

    const [inputData, setInputData] = useState('');
    const [foundData, setFoundData] = useState<dt>([]);


    const appearDetail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputData(e.target.value);
        // let dataToSearch = JSON.stringify(data);
        const dataToSearch: dt = data.filter(v => v.event.includes(inputData));
        // console.log('dataToSerach', dataToSearch);
        setFoundData(dataToSearch);
    }

    return (
        <div className='h-screen'>
            <div className='flex flex-col justify-center items-center h-screen bg-orange-400'>
                <input
                    placeholder='Enter your address here'
                    className='p-2 rounded-md w-80 text-orange-500 outline-none'
                    value={inputData}
                    // onChange={e => setInputData(e.target.value)}
                    onChange={e => appearDetail(e)}
                />
                {foundData && inputData && <div>
                    {foundData.map((v) => {
                        return (
                            <div key={v.id} className='px-32 text-gray-800 bg-gray-100'>{v.event}</div>
                        )
                    })}
                </div>}
            </div>
        </div >
    )
}

export default Page
