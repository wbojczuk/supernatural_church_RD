"use client"
import styles from "./aboutus.module.css"
import Link from "next/link"

export default function AboutUs() {
  return (
    <section className={styles.section}>
        <div className={styles.imgWrapper}>
            <img className={styles.img} src={"/img/logo-bg.webp"} width={360} height={600} alt="Image of the Pastor and his wife" />
        </div>
        

        <div className={styles.content}>
            <h2>About <strong>Us</strong></h2>

            <p>We believe God has called us to serve. Our church embodies this and wherever we can, serve others. We want to spread the word of God and see lives transformed through it. We started SNIPER Ministries to help fight hunger and poverty in light of this. We hope our church can work in your life!
            </p>
            <Link href="/contact" className="main-link">Watch Online</Link>
        </div>
    </section>
  )
}
