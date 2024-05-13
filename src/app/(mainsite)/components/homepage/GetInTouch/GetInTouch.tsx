"use client"

import styles from './getintouch.module.css';
import Link from 'next/link';

export default function GetInTouch(){
return (
 <div className={styles.getInTouch}>

    <h2>Get In <span className="highlight">Touch</span></h2>

    <div className={styles.optionsWrapper}>
        <Link href="/contact" className={styles.option}>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z"></path></svg>
            <h4>Contact Us</h4>
            <p>We’d love to hear from you!</p>
        </Link>

        <a href="https://facebook.com" target='_blank' className={styles.option}>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"></path></svg>
            <h4>Facebook</h4>
            <p>Watch Our Sermons Online</p>
        </a>
    </div>
 
    <img src='/img/getintouch.png' alt='Image of people holding hands' className='bg-img' />
    <div className='gradient-shader-dark'></div>
 </div>
)};