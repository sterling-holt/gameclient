
import style from "./page.module.scss"


export default function Home() {
  return <>
    <main className={style.main}>
      <header className={style.header} />
      <Carousel items={[
        { "name": "Game title" },
        { "name": "Game title" },
        { "name": "Game title" },
      ]} />
    </main>

    <div className={style.tabbedcontent}>
      Library
    </div>
  </>
}




const Carousel = ({ items }: any) => {


  return <ul className={style.carousel}>
    { items.map(( i: any, index: any ) => {
      return <li key={index}
        tabIndex={index !== 0 ? 0 : 1}>
        {i.name}
      </li>
    })}
  </ul>
}