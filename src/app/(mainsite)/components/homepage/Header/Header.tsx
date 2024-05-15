"use client"
import styles from './header.module.css';
import Link from 'next/link';

export default function Header(){
return (
 <header className={styles.header}>

    <h1>Supernatural Church</h1>
    <h3>We practice what we preach</h3>

    <Link className='main-link' href='/watch'>Watch Online</Link>
 
    <img src='/img/header-bg.webp' alt='Image of ' className='bg-img' />
    <div className='gradient-shader'></div>
 </header>
)};