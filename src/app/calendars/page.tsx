"use client"

import React, { useEffect, useState } from 'react';
import { Alert, Calendar } from 'antd';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import { useRouter } from 'next/navigation';

const Page: React.FC = () => {

    const router = useRouter();

    const [value, setValue] = useState(() => dayjs('2017-01-25'));
    const [selectedValue, setSelectedValue] = useState(() => dayjs('2017-01-25'));

    useEffect(() => {
        const dayDate = new Date().getDate();
        const monthDate = new Date().getMonth();
        const yearDate = new Date().getFullYear();

        setSelectedValue(() => dayjs(yearDate + '-' + monthDate + '-' + dayDate))
        setValue(() => dayjs(yearDate + '-' + monthDate + '-' + dayDate))
    }, [])

    const onSelect = (newValue: Dayjs) => {
        setValue(newValue);
        setSelectedValue(newValue);

        router.push('/summary')
    };

    const onPanelChange = (newValue: Dayjs) => {
        setValue(newValue);
    };

    const containerStyle = {
        padding: '20px',
        backgroundColor: '#f5f5f5',
        borderRadius: '8px',
        // maxWidth: '400px',
        maxWidth: '800px',
        margin: 'auto',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    };

    const alertStyle = {
        marginBottom: '16px',
        fontWeight: 'bold',
    };

    return (
        <div style={containerStyle}>
            <Alert message={`You selected date: ${selectedValue?.format('YYYY-MM-DD')}`} style={alertStyle} />
            <Calendar value={value} onSelect={onSelect} onPanelChange={onPanelChange} />
        </div>
    );
};

export default Page;






// "use client"

// import React, { useState } from 'react';
// import { Alert, Calendar } from 'antd';
// import type { Dayjs } from 'dayjs';
// import dayjs from 'dayjs';

// const Page: React.FC = () => {
//     const [value, setValue] = useState(() => dayjs('2017-01-25'));
//     const [selectedValue, setSelectedValue] = useState(() => dayjs('2017-01-25'));

//     const onSelect = (newValue: Dayjs) => {
//         setValue(newValue);
//         setSelectedValue(newValue);
//     };

//     const onPanelChange = (newValue: Dayjs) => {
//         setValue(newValue);
//     };

//     return (
//         <>
//             <Alert message={`You selected date: ${selectedValue?.format('YYYY-MM-DD')}`} />
//             <Calendar value={value} onSelect={onSelect} onPanelChange={onPanelChange} />
//         </>
//     );
// };

// export default Page;