import React from 'react';
import { HiOutlineSwitchVertical } from "react-icons/hi";


export default function switchButton({onClick}) {
  return (
    <button className='flex justify-center w-full -mb-8 rotate-180' onClick={onClick}>
<HiOutlineSwitchVertical size={30} />
</button>
  )
}
