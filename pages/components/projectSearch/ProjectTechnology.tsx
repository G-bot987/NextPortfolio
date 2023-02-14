import React, { useState } from 'react'

export default function ProjectTechnology(props: any) {
    const [select, SetSelect] = useState(false)

    console.log('tec props')
    console.log(props)
    console.log('---')
    return (
        <li >
            <button className="max-w-fit rounded-full border-2 border-white p-2 my-2"
                style={{
                    background: select ? "white" : "",
                    color: select ? "black" : "",
                    border: select ? "solid" : "",
                }}>
                {props.tec}
            </button>
        </li>
    )
}