import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/header'
import Link from 'next/link'





const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  let varText = 'TESTE NextJS';
  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1>{varText}</h1>
        <ul>
          <li>
            <Link href="/static" legacyBehavior><a>Static</a></Link>
          </li>
          <li><Link href="/dynamic" legacyBehavior><a>Dynamic</a></Link></li>
        </ul>
      </main>
    </>
  )
}
