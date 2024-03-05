//  Dashboard


import { Suspense } from "react";
import style from "./page.module.scss"
import { Carousel } from "./_components/carousel";


export default function Home() {
  return <>
    <main className={style.main}>
      <header className={style.header} />
      
      <Carousel items={[
        { "name": "Game title" },
        { "name": "Game title" },
        { "name": "Game title" },
        { "name": "Game title" },
        { "name": "Game title" },
        { "name": "Game title" },
        { "name": "Game title" }
      ]} />
    </main>
  </>
}