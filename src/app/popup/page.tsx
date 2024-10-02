"use client"

import React from 'react';
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';

import { DeleteOutlined } from '@ant-design/icons';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../lib/store'; // Import the RootState type
import { incrementt, decrement } from '../../lib/features/counter/counterSlice';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const items: CollapseProps['items'] = [
    {
        key: '1',
        label: 'pricee',
        children: <p>{text}</p>,
        //                 {obj && obj.productName.length + ' - ' + '$' + pricee}

    }
];

const Popup: React.FC = () => {

    // const count = useSelector((state: RootState) => state.counter?.value);
    const obj = useSelector((state: RootState) => state.counter?.obj);

    // Optional: Use dispatch if you want to modify the count
    const dispatch = useDispatch();

    let prices: number[] = [];
    // let pricee: number = 0;

    type productType = {
        name: string,
        price: number,
        imageUrl: string,
    }

    const [pricee, setPricee] = useState(0);
    const [products, setProducts] = useState<(productType | string)[]>([]);

    const router = useRouter();

    useEffect(() => {
        { console.log('obj.productName...', obj && obj.productName) }
        obj && setProducts([...obj.productName])
        // let pricee = obj && obj.productName.reduce((a: any, b: any) => b.price + a.price, 0);
        // let pricee = obj && obj.productName.reduce((a: any, b: any) => +b.price + +a.price, 0);
        // let pricee = obj && obj.productName.map((v: any) => v.reduce((a: any, b: any) => a.price + b.price, 0));
        obj && obj.productName.map((v: any) => prices.push(v.price));
        let priceed = prices.reduce((a, b) => a + b, 0)
        setPricee(priceed)
        // let pricee = obj && obj.productName.reduce((a: any, b: any) => a.price);
        // let pricee = obj && obj.productName.map((v: any) => v.price)
        console.log('priceee...', pricee);
    }, [obj])

    const items: CollapseProps['items'] = [
        {
            key: '1',
            // label: pricee,
            label:
                obj && obj.productName.length + ' - ' + '$' + pricee,
            // children: <p>{text}</p>,
            // children: <p>{obj && obj.productName.map(v => v)}</p>,
            children: <div>{products.map((v, i) => typeof v === 'object' && 'name' in v ? <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}
            ><span>{i + 1 + ' - ' + v.name}</span><span><DeleteOutlined /></span></div> : v)}</div>,
            //                 {obj && obj.productName.length + ' - ' + '$' + pricee}

        }
    ];

    const onChange = (key: string | string[]) => {
        console.log(key);
    };

    return <Collapse items={items} defaultActiveKey={['1']} onChange={onChange}
        style={{
            backgroundColor: 'white'
        }}
    />;
};

export default Popup;





// "use client"

// import { useSelector, useDispatch } from 'react-redux';
// import { RootState } from '../../lib/store'; // Import the RootState type
// import { incrementt, decrement } from '../../lib/features/counter/counterSlice';

// import { useRouter } from 'next/navigation';
// import { useEffect, useState } from 'react';

// const Popup = () => {

//     // const count = useSelector((state: RootState) => state.counter?.value);
//     const obj = useSelector((state: RootState) => state.counter?.obj);

//     // Optional: Use dispatch if you want to modify the count
//     const dispatch = useDispatch();

//     let prices: number[] = [];
//     // let pricee: number = 0;
//     const [pricee, setPricee] = useState(0)

//     const router = useRouter();

//     useEffect(() => {
//         { console.log('obj.productName...', obj && obj.productName) }
//         // let pricee = obj && obj.productName.reduce((a: any, b: any) => b.price + a.price, 0);
//         // let pricee = obj && obj.productName.reduce((a: any, b: any) => +b.price + +a.price, 0);
//         // let pricee = obj && obj.productName.map((v: any) => v.reduce((a: any, b: any) => a.price + b.price, 0));
//         obj && obj.productName.map((v: any) => prices.push(v.price));
//         let priceed = prices.reduce((a, b) => a + b, 0)
//         setPricee(priceed)
//         // let pricee = obj && obj.productName.reduce((a: any, b: any) => a.price);
//         // let pricee = obj && obj.productName.map((v: any) => v.price)
//         console.log('priceee...', pricee);
//     }, [obj])

//     return (
//         <div
//             // className='absolute bg-red-500 right-8 bottom-1 p-2 rounded-lg'
//             className='fixed bg-red-500 right-8 bottom-6 p-2 rounded-lg active:scale-105'
//         >
//             <button
//                 onClick={() => router.push('/calendars')}
//             >
//                 {obj && obj.productName.length + ' - ' + '$' + pricee}
//             </button>
//         </div>
//     )
// }

// export default Popup
