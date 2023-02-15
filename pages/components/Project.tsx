import React, { useEffect, useState } from "react";
import Image from "next/image";
import { projectRootState } from '../../slices/projectSlice'

import { ProjectInterface } from "../../interface/projects.interface";
import { useSelector } from "react-redux";
import RenderProject from "./RenderProject";

export default function Project(props: ProjectInterface) {

  const { technologies } = props

  const store = useSelector(projectRootState)

  var [show, SetShow] = useState(false)

  const hasSelectedTec: boolean[] = []
  useEffect(() => {

    console.log('trigger')

    technologies.forEach((technology) => {
      store.forEach((selectedTec: number) => {

        if (selectedTec === technology) {
          hasSelectedTec.push(true)
          return
        } else {
          hasSelectedTec.push(false)
          return
        }

      })

    })

    const render = hasSelectedTec.filter((value) => {
      if (value === true) {

        return true
      } else {
        return false
      }
    })

    if (render[0] === true) {
      SetShow(
        show = true
      )
    }

  }, [store])


  if (show) {
    return (
      <li >
        <RenderProject {...props} />


      </li>
    );
  } else {
    return null
  }
}
