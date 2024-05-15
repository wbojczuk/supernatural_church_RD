import styles from './serve.module.css';

export default function Serve(){
return (
 <div className={styles.serve}>

    <h2>Serve</h2>

    <p>The Church is supposed to serve god, and his people. We believe this strongly and it’s deeply rooted in our church</p>
 
    <img src='/img/serve.webp' alt='Image of ' className='bg-img' />
    <div style={{backgroundColor: "rgba(205,172,111,.5)"}} className='shader'></div>
 </div>
)};