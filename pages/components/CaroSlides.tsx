import React, { useState } from 'react';
import { slideInterface } from '../../interface/home.interface'
// import Slide from './Slide';

export default function CaroSlides(props: slideInterface) {


    console.log('props')
    console.log(props)
    console.log(';----')

    return (
        <ul>

            {props &&
                <div>

                    {/* <Slide /> */}
                </div>

            }
        </ul>


    )
}
