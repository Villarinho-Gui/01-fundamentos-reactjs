import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";
import "./global.css";

const post = [
  {
    id: 1,
    author: {
      avatarImageURL: "https://github.com/Villarinho-Gui.png",
      name: "Guilherme Villarinho",
      role: "Web Deloper",
    },
    content: [
      {type: 'paragraph', content: 'Fala galera!', },
      {type: 'paragraph', content: 'Como vão vocês? Eu estou...', },
      {type: 'link', content: 'Guilherme.design/colabora', },
    ],
    publishedAt: new Date ('2022-05-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarImageURL: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @Rocketseat",
    },
    content: [
      {type: 'paragraph', content: 'Fala galera!', },
      {type: 'paragraph', content: 'Como vão vocês? Eu estou...', },
      {type: 'link', content: 'Guilherme.design/colabora', },
    ],
    publishedAt: new Date ('2022-05-04 22:05:00'),
  },
];

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
          {post.map(post =>{
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  );
}
