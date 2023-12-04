import { Header } from './components/Header'
import {Post} from './components/Post'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'

import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/italoxs.png',
      name: 'Italo Sales',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala pessoas do meu agrado !'},
      { type: 'paragraph', content:  'Meu primeiro feed em reactjs'},
      { type: 'link', content:'italoxs.dev/ixsfeed'},
    ],
    publishedAt: new Date('2023-11-19 22:41:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala pessoas do meu agrado !'},
      { type: 'paragraph', content:  'Meu primeiro feed em reactjs'},
      { type: 'link', content:'<a href="">italoxs.dev/ixsfeed</a>'},
    ],
    publishedAt: new Date('2023-11-18 22:41:00')
  },
]

export function App() {
  return (
    <>
      <div>
        <Header />

        <div className={styles.wrapper}>
          <Sidebar />
          
          <main>
            { posts.map(post => {
              return (
                <Post
                  key={post.id} 
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              )
            }) }
          </main>
        </div>
      </div>
    </>
  )
}
