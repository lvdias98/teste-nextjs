import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/header'
import Link from 'next/link'
import { useRouter } from 'next/router'


export default function Home() {
    const router = useRouter();
    const id = router.query.id;

    return (
        <>
            <main className={styles.main}>
                <Link href="/dynamic" legacyBehavior><a>Voltar</a></Link>
                <h3>Exibindo id page dynamic: {id}</h3>
            </main>
        </>
    )
}
