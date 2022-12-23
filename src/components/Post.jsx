import styles from "./Post.module.css";

export function Post(props) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/Villarinho-Gui.png"
            alt="Foto de perfil"
          />
          <div className={styles.authorInfo}>
            <strong>Guilherme Villarinho</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="23 de dezembro às 08:32h" dateTime="2022-12-23 08:32:30">
          Publicado há 1 hora
        </time>
        <div className={styles.content}>
          
        </div>
      </header>
    </article>
  );
}
