import style from './navbar.module.scss'

export const Navbar = () => {

  return <nav className={style.nav}>
      <span className={style.avatar} 
        tabIndex={0} />
  
      <ul>
        <li tabIndex={0}>Nav</li>
        <li tabIndex={0}>Nav</li>
        <li tabIndex={0}>Nav</li>
      </ul>
  
      <div>System tray</div>
    </nav>
  }