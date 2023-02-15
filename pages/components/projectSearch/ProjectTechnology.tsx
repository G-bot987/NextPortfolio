import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { TechnologyInterface } from '../../../interface/projects.interface'
import { choosenTech, removeTech } from '../../../slices/projectSlice'

export default function ProjectTechnology(props: any) {
    const [select, SetSelect] = useState(false)

    const dispatch = useDispatch();

    const { technology } = props
    const { tec, key } = technology

    useEffect(() => {
        const reduxPayload = key
        if (select) {
            dispatch(choosenTech(reduxPayload))
        } else {
            dispatch(removeTech(reduxPayload))
        }
    }, [select])

    return (
        <li >
            <button className="max-w-fit rounded-full border-2 border-white p-2 my-2"
                onClick={() => SetSelect(!select)}
                style={{
                    background: select ? "white" : "",
                    color: select ? "black" : "",
                    border: select ? "solid" : "",
                }}>
                {tec}
            </button>
        </li>
    )
}