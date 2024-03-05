import style from './navbar.module.scss'


import { Suspense, useContext } from 'react'
import { System } from './system'




export const Navbar = () => {



  return <nav className={style.nav}>
      <span className={style.avatar} 
        tabIndex={0} />
  
      <ul>
        <li tabIndex={0}>Nav</li>
        <li tabIndex={0}>Nav</li>
        <li tabIndex={0}>Nav</li>
      </ul>

      <Suspense fallback={"Loading controller status"}>
        <System />
      </Suspense>
    </nav>
  }