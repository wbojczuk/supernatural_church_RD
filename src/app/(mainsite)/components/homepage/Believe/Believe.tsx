import styles from './believe.module.css';

export default function Believe(){
return (
 <div className={styles.believe}>

    <h2>What We <strong>Believe</strong></h2>

    <p>We believe in Jesus Christ. We serve God and his people. We believe the church is here for a sole purpose, and that is to SERVE God and his people. Supernatural church holds multiple cookouts to serve the needy, hungry and homeless. That's our vision, GRACE!</p>
 
    <img src='/img/believe.png' alt='Image of Bible' className='bg-img' />
    <div className='shader' style={{backgroundColor: "rgba(0,0,0,0.7)"}}></div>
 </div>
)};