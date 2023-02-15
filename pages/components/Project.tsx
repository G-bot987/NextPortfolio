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

    const renderArr = hasSelectedTec.filter((value) => {
      if (value === true) {

        return true
      } else {
        return false
      }
    })
    const render = (() => {
      if (renderArr.length > 0) {
        return renderArr?.reduce(
          (accumulator, currentValue) => accumulator || currentValue
        );
      }
    })();



    if (render === true) {
      SetShow(show = true)
    } else {
      SetShow(show = false)
    }

  }, [store])


  if (show) {
    return (
      <li className="mx-2" >
        <RenderProject {...props} />
      </li>
    );
  } else {
    return null
  }
}
