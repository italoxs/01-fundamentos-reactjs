import {Post} from './Post'
import { Header } from './components/Header'

import styles from './App.module.css'

import './global.css'
import { Sidebar } from './components/Sidebar'

export function App() {
  return (
    <>
      <div>
        <Header />

        <div className={styles.wrapper}>
          <Sidebar />
          
          <main>
            <Post 
              author="Italo Sales" 
              content="Um post enigmatico para te deixar muito louco"
            />

            <Post 
              author="Gal NUnes" 
              content="Deixe de presepada e me diga logo o que é"
            />
          </main>
        </div>
      </div>
    </>
  )
}
