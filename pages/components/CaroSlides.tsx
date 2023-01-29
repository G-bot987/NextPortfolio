import React from 'react';
import { CarouselSlideInterface } from '../../interface/carousel.interface'
import Image from 'next/image';

export default function CaroSlides(props: CarouselSlideInterface) {
    const { type, img, alt, experience, mainHeader, subHeader, technologiesTxt } = props
    return (
        <li className='items-center flex flex-col min-w-full min-h-full'>
            {type === 'img' && img && alt &&
                <div>
                    <h2 className='text-2xl	'>{experience}</h2>
                    <Image src={img}
                        alt={alt}
                        width={500}
                        height={500}
                    />
                </div>
            }

            {
                type === 'txt' &&
                <div className='min-w-full min-h-full'>

                    <h1 className={`text-6xl p-8 italic`}>{mainHeader}</h1>

                    <h2 className={`italic`}>{subHeader}</h2>

                    <p className={`italic`}>{technologiesTxt}</p>
                </div>

            }
        </li>
    )
}
