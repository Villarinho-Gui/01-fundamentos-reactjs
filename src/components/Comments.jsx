import styles from "./Comments.module.css";
import { Trash, ThumbsUp } from "phosphor-react";

export function Comments() {
  return (
    <article className={styles.comments}>
      <img
        className={styles.avatar}
        src="https://github.com/Villarinho-Gui.png"
        alt="Foto de perfil"
      />
      <div className={styles.commentContainer}>
        <div className={styles.comment}>
          <header>
            <div className={styles.authorInfo}>
              <strong>
                Guilherme Villarinhos <span>(você)</span>
              </strong>
              <time
                title="28 de dezembro às 16:23h"
                dateTime="2022-12-28 16:23:30"
              >
                Cerca de 2h atrás
              </time>
            </div>
            <button tittle="Deletar comentário">
              <Trash size={25} weight="light" />
            </button>
          </header>
          <p>Muito bom Devon, parabéns!!</p>
        </div>
        <footer>
          <button>
            <ThumbsUp size={20} weight="light" />
            Aplaudir <span>23</span>
          </button>
        </footer>
      </div>
    </article>
  );
}
