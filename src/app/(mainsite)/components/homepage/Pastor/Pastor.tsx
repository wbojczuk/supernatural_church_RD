"use client"
import styles from "./pastor.module.css"
import Link from "next/link"

export default function Pastor() {
  return (
    <section className={styles.section}>
        <div className={styles.imgWrapper}>
            <img className={styles.img} src={"/img/pastor.webp"} width={360} height={600} alt="Image of the Pastor and his wife" />
        </div>
        

        <div className={styles.content}>
            <h2>Meet The <strong>Pastor</strong></h2>

            <p>Pastor Tony Cisneros has been in ministry for more than 25 years. He has done international ministry work full time for over 6 years. Now, has dedicated to working here locally to serve God's people. Pastor Tony believes in working and feels no minister should be a burden to the church. On the contrary he holds a fulltime employment and supports God's people in what ever needs they might have.
            </p>
            <Link href="/contact" className="main-link">Watch Online</Link>
        </div>
    </section>
  )
}
