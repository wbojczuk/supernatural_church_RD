"use client"

import styles from './snipercontent.module.css';
import Link from 'next/link';

export default function SniperContent(){
return (
 <div className={styles.sniperContent}>

    <div className="center">
        <img src="/img/sniper.webp" alt="sniper ministries logo" className={styles.logo} />
    </div>

    <p>HUNGER AND POVERTY RELIEF IS OUR PURPOSE <br />Our mission is to bring relief to vulnerable families and the homeless affected by poverty.  We are constantly seeking volunteers, donations and clothing of all sizes for both men and woman.</p>

    <p>While our charity organization was founded on the belief that we are here to serve and feed the hungry, it is our moral duty to clothe and feed the poor (Mathew 25:40), Food For The Poor is neutral, impartial, apolitical, and encompasses all beliefs. SNIPER Ministries holds preserving human dignity and caring for those in need as a loving gesture that God calls us to have for others. </p>

    <p>Our short-term focus is to demonstrate that poverty is not inevitable and that people can break out of poverty with the proper assistance and the teachings of Jesus Christ. We strive in teaching and leading people to God for a life changing experience. We partner with local grocers and receive monetary donations to achieve this goal.</p>

    <p>At SNIPER ministries, no one goes hungry, thirsty or unclothed.</p>

    <div className={`center ${styles.buttonWrapper}`}>
        <Link className='main-link' href='https://paypal.com' target="_blank">Donate</Link>
    </div>
 
    <img src='/img/bible.webp' alt='Image of Bible' className='bg-img' />
    <div style={{backgroundColor: "rgba(0,0,0,0.8)"}} className='shader'></div>
 </div>
)};