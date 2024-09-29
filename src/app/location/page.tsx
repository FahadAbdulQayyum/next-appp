"use client"

import '../globals.css';
import data from '../data/data.json';
import { useState } from 'react';
import LoadingIcons from 'react-loading-icons';
import { useRouter } from 'next/navigation';

const Page = () => {

    const router = useRouter();

    const [inputData, setInputData] = useState('');
    const [loader, setLoader] = useState(false);
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
                <span className='flex bg-white rounded-md'>
                    {loader && <LoadingIcons.Puff stroke="orange" />}
                    <input
                        placeholder='Enter your address here'
                        className='p-2 rounded-md w-80 text-orange-500 outline-none'
                        value={inputData}
                        // onChange={e => setInputData(e.target.value)}
                        onChange={e => appearDetail(e)}
                    />
                </span>
                {foundData && inputData && <div className='bg-gray-100 w-80'>
                    {foundData.map((v: any) => {
                        return (
                            <div>
                                <button key={v.id} className='w-full text-gray-800 bg-gray-100 hover:bg-gray-200 duration-1000 transition-colors'
                                    onClick={() => {
                                        setLoader(true)
                                        setFoundData([])
                                        setInputData(v.event)
                                        setTimeout(() => {
                                            router.push('/services')
                                        }, 2000)
                                    }}
                                > {v.event}</button>
                            </div>
                        )
                    })}
                </div>}
            </div>
        </div >
    )
}

export default Page
