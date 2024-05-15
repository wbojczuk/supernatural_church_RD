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

        <Link href="/watch" className={styles.option}>
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1200 1200"><path fill="currentColor" d="M600 0C268.629 0 0 268.629 0 600s268.629 600 600 600s600-268.629 600-600S931.371 0 600 0M242.285 329.297h715.356v541.406H242.285zm87.744 87.744v365.918H869.97V417.041zm189.698 63.721l210.719 121.51l-210.719 122.24z"></path></svg>
            <h4>Video</h4>
            <p>Watch Our Sermons Online</p>
        </Link>
    </div>
 
    <img src='/img/getintouch.webp' alt='Image of people holding hands' className='bg-img' />
    <div className='gradient-shader-dark'></div>
 </div>
)};