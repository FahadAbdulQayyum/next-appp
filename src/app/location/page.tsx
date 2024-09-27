"use client"

import '../globals.css';
import data from '../data/data.json';
import { useState } from 'react';

const Page = () => {

    const [inputData, setInputData] = useState('');
    const [foundData, setFoundData] = useState([]);

    const appearDetail = (e: any) => {
        setInputData(e.target.value);
        // let dataToSearch = JSON.stringify(data);
        let dataToSearch: any = data.filter(v => v.event.includes(inputData));
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
                    {foundData.map((v:any) => {
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
