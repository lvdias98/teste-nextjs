import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  let varText = 'TESTE NextJS';
  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1>{varText}</h1>
      </main>
    </>
  )
}
