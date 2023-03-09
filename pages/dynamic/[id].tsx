import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/header'
import Link from 'next/link'
import { useRouter } from 'next/router'

export async function getStaticProps(context:any){
    const {params} = context;
    const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.todoId}`);
    const todo = await data.json();
    // console.log('API FAKE TEST:', todo);
    return{
       props:{todo},
    }
}

export async function getStaticPaths() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
    const data = await response.json();
    console.log(data)
    const paths = data.map((todo:any) => ({ params: { id: String(todo.id) } }));
    return { paths, fallback: false }
}

export default function Todo({todo}) {
    const router = useRouter();
    const id = router.query.id;

    return (
        <>
            <main className={styles.main}>
                <Link href="/dynamic" legacyBehavior><a>Voltar</a></Link>
                <h3>Exibindo id page dynamic: {id}</h3>
                <h3>Exibindo id todo: {todo.id}</h3>
            </main>
        </>
    )
}
