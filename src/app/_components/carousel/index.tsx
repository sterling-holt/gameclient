import { Suspense } from "react"
import style from './carousel.module.scss'
import { Item } from "./item"


export const Carousel = ({ items }: any) => {
 
    return <ul className={style.carousel}>
      { items.map(( i: any, index: any ) => {
        return <Suspense key={index}>
          <Item />
        </Suspense>
      })}
    </ul>
  }