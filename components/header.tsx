import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import headerStyle from '@/styles/Header.module.css'
import Image from 'next/image'
import emojiHand from '@/public/emoji-png-0165.png'

export default function Header() {
    return (
      <>
        <Head>
          <title>TESTE NEXT JS 'header'</title>
        </Head>
        <header className={headerStyle.header}>
            <h1 className={headerStyle.h1}>Olá, sou <span>Fabio Brasil</span></h1>
            <Image 
                className={headerStyle.emoji}
                src={emojiHand}
                alt='Hand emoji'
            />
        </header>
      </>
    )
  }