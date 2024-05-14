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

        <a href="https://www.youtube.com/@tonycisneros8888" target='_blank' className={styles.option}>
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20"><path fill="currentColor" d="M11.603 9.833L9.357 8.785C9.161 8.694 9 8.796 9 9.013v1.974c0 .217.161.319.357.228l2.245-1.048c.197-.092.197-.242.001-.334M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10 .4m0 13.5c-4.914 0-5-.443-5-3.9s.086-3.9 5-3.9s5 .443 5 3.9s-.086 3.9-5 3.9"></path></svg>
            <h4>YouTube</h4>
            <p>Watch Our Sermons Online</p>
        </a>
    </div>
 
    <img src='/img/getintouch.png' alt='Image of people holding hands' className='bg-img' />
    <div className='gradient-shader-dark'></div>
 </div>
)};