import { Header } from "./components/Header";

import styles from "./App.module.css";
import "./global.css";
import { Posts } from "./components/Posts";

export function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <div className={styles.wrapper}>
        <aside>sidebar</aside>
        <main>
          <Posts
            author="Guilherme"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi doloribus, hic temporibus iure mollitia explicabo iste quidem nostrum in est delectus ut debitis numquam libero sed, recusandae, quod praesentium optio?"
          />

          <Posts
            author="Gustavo"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi doloribus, hic temporibus iure mollitia explicabo iste quidem nostrum in est delectus ut debitis numquam libero sed, recusandae, quod praesentium optio?"
          />

          <Posts />
        </main>
      </div>
    </>
  );
}
