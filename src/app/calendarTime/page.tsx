"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import type { DrawerProps, RadioChangeEvent } from 'antd';
import { Button, Drawer, Radio, Space } from 'antd';
import Calendars from '../calendars/page';
import Image from 'next/image';

const CalendarTime: React.FC = () => {

    const router = useRouter();

    const times = ["07:00 AM", "07:30 AM", "08:00 AM", "08:30 AM", "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM", "08:00 PM", "08:30 PM", "09:00 PM", "09:30 PM"]

    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState<DrawerProps['placement']>('right');

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const onChange = (e: RadioChangeEvent) => {
        setPlacement(e.target.value);
    };

    return (
        <>
            <Space>
                {/* <Radio.Group value={placement} onChange={onChange}>
                    <Radio value="top">top</Radio>
                    <Radio value="right">right</Radio>
                    <Radio value="bottom">bottom</Radio>
                    <Radio value="left">left</Radio>
                </Radio.Group> */}
                <Button type="primary" onClick={showDrawer}>
                    Open
                </Button>
                {/* <Calendars showDrawer={showDrawer} /> */}
                <Calendars setOpen={setOpen} />
            </Space>
            <Drawer
                title="Select Time"
                placement={placement}
                closable={false}
                onClose={onClose}
                open={open}
                key={placement}
            >
                <span
                    className="bg-orange-500 h-60 flex-1 px-5 space-y-2"
                >
                    {times.map(v => <div
                        className="w-max border border-x-2 p-5 hover:scale-105 duration-700 transition-transform cursor-pointer"
                        onClick={() => router.push('/summary')}
                    >
                        <div className='flex justify-between w-64'>
                            <div className="font-bold">
                                {v}
                            </div>
                            <div>
                                2 Pros Available
                            </div>
                        </div>
                        <div className="flex justify-center items-center">
                            <div
                                className="rounded-full overflow-hidden border border-l-1 border-black w-6 h-6"
                            >
                                <Image src="https://www.shutterstock.com/image-vector/man-shirt-tie-businessman-avatar-600nw-548848999.jpg" alt="pros image" width={50} height={50} />
                            </div>
                        </div>
                    </div>)
                    }
                </span >
            </Drawer>
        </>
    );
};

export default CalendarTime;