import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/header'
import Link from 'next/link'





const inter = Inter({ subsets: ['latin'] })

export default function Static() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1>Statica</h1>
      </main>
    </>
  )
}