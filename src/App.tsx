import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar";

import './global.css'
import styles from './App.module.css'

let posts = [
  {
    id: 1,
    author: {
      avatar_url: "https://github.com/JonathanJoelVos.png",
      name: "Jonathan Vós",
      role: "Front-End Dev"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: '👉jane.design/doctorcare' },
    ],
    publishAt: new Date('09/08/2022 08:59')
  },
  {
    id: 2,
    author: {
      avatar_url: "https://github.com/micapareddes.png",
      name: "Micaela Paredes",
      role: "Designer"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: '👉jane.design/doctorcare' },
    ],
    publishAt: new Date('09/07/2022 08:50')
  },
]

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishAt={post.publishAt}
              />
            )
          }
          )}
        </main>

      </div>
    </div>
  )
}

