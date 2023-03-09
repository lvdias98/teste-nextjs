import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/header'
import Link from 'next/link'





const inter = Inter({ subsets: ['latin'] })

export default function Dynamic() {
  var numberRandom = Math.floor(Math.random() * 100 + 1);
  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1>Dinamica</h1>
        <Link href={`/dynamic/${numberRandom}`} legacyBehavior><a>link random</a></Link>
        <Link href="/" legacyBehavior><a>Voltar home</a></Link>
      </main>
    </>
  )
}
