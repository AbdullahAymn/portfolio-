import { darkCtx } from '@/utils/store'
import React, { useContext } from 'react'

export default function Layout(props) {

    //Check for dark
    const isDark = useContext(darkCtx).dark
    const setisDark = useContext(darkCtx).setDark
  return (
    <div className={`${isDark ? "bg-neutral-800" : ' bg-gray-200'} tra`}>
      <div onClick={()=>setisDark(!isDark)} className=' fixed top-0 left-0'>dark</div>
          {props.children}
      
    </div>
  )
}
