import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";


import styles from "./App.module.css";
import "./global.css";

export function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <div className={styles.wrapper}>
        <aside>
          <Sidebar />
        </aside>
        <main>
          <Post
            author="Guilherme"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi doloribus, hic temporibus iure mollitia explicabo iste quidem nostrum in est delectus ut debitis numquam libero sed, recusandae, quod praesentium optio?"
          />

          <Post
            author="Gustavo"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi doloribus, hic temporibus iure mollitia explicabo iste quidem nostrum in est delectus ut debitis numquam libero sed, recusandae, quod praesentium optio?"
          />

          <Post />
        </main>
      </div>
    </>
  );
}
