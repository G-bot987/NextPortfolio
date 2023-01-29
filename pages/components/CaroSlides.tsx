import React from 'react';
import { slideInterface } from '../../interface/home.interface'
import Image from 'next/image';

export default function CaroSlides(props: slideInterface) {

    return (
        <div>

            <Image src={props.img}
                alt=''
            />
        </div>
    )
}
