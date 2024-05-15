import styles from './helping.module.css';

export default function Helping(){
return (
 <div className={styles.helping}>

    <h2>Helping The<br /><span className="highlight">Community</span></h2>

    <p>We want to make an impact while spreading the love of God. That’s why we hold cookouts for the needy, and raise money to fight cancer.</p>
 
    <img src='/img/helping.webp' alt='Image of Volunteers' className='bg-img' />
    <div className='gradient-shader' style={{background: "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 100%)"}}></div>
 </div>
)};