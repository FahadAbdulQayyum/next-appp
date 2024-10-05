// import { Calendar } from 'antd'
import React from 'react'
import Calendars from '../calendars/page'
import Image from 'next/image'
import CalendarTime from '../calendarTime/page'

const Checkout = () => {

    const times = ["7:00 AM", "7:30 AM"]

    return (
        <div
            className="flex flex-3 justify-center"
        >
            <span
                className="flex-2"
            >
                {/* <Calendar /> */}
                <CalendarTime />
                {/* <Calendars /> */}
            </span>
            {/* <span
                className="bg-orange-500 h-60 flex-1 px-5 space-y-2"
            >
                {times.map(v => <div
                    className="w-max border border-x-2 p-5"
                >
                    <div className='flex justify-between w-56'>
                        <div>
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
            </span > */}
        </div >
    )
}

export default Checkout
