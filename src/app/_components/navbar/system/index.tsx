'use client'

import { useContext } from 'react'
import * as Controller from '../../controller'
import style from './system.module.scss'


export const System = () => {
    const controller = useContext(Controller.Context)

    return <div className={style.system}>
        <div>controller status: {controller.isActive}</div>
        <div>Wifi</div>
    </div>
}

