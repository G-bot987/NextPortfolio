import React from 'react';
import { slideInterface } from '../../interface/home.interface'
import Image from 'next/image';
import { imageConfigDefault } from 'next/dist/shared/lib/image-config';

export default function CaroSlides(props: slideInterface) {
    const { img, alt } = props

    return (
        <div>

            <Image src={img}
                alt={alt}
                width={700}
                height={700}
            />
        </div>
    )
}
