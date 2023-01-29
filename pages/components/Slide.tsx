import React from 'react'
import { slideInterface } from '../../interface/home.interface'
import Image from 'next/image'

export default function Slide(props: slideInterface) {
    console.log('in slide')
    console.log(props)
    console.log('-----')
    return (
        <li>
            <Image
                src={props?.img}
                alt=''
            />
        </li>
    )
}
