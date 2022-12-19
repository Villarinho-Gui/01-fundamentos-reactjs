import styles from './Sidebar.module.css'

export function Sidebar(){
  return (
    <>
      <aside className={styles.sidebar}>
        <figure>
          <img 
          src="https://github.com/Villarinho-Gui.png" 
          alt="Foto de perfil" 
          />
        </figure>
        <h2>Guilherme Villarinho</h2>
        <p>Front-End Developer</p>
      </aside>
    </>
  )
}