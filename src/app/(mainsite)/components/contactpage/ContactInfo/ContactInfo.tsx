import styles from './contactinfo.module.css';

export default function ContactInfo(){
return (
 <div className={styles.contactInfo}>
    <div className={styles.infoWrapper}>

    <div className={styles.info}>
            <div className={styles.iconWrapper}>
                <div className={styles.icon}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="currentColor" d="M152.27 37.93a8 8 0 0 1 9.8-5.66a86.22 86.22 0 0 1 61.66 61.66a8 8 0 0 1-5.66 9.8a8.23 8.23 0 0 1-2.07.27a8 8 0 0 1-7.73-5.94a70.35 70.35 0 0 0-50.33-50.33a8 8 0 0 1-5.67-9.8m-2.33 41.8c13.79 3.68 22.65 12.54 26.33 26.33A8 8 0 0 0 184 112a8.23 8.23 0 0 0 2.07-.27a8 8 0 0 0 5.66-9.8c-5.12-19.16-18.5-32.54-37.66-37.66a8 8 0 1 0-4.13 15.46m81.94 95.35A56.26 56.26 0 0 1 176 224C96.6 224 32 159.4 32 80a56.26 56.26 0 0 1 48.92-55.88a16 16 0 0 1 16.62 9.52l21.12 47.15v.12A16 16 0 0 1 117.39 96c-.18.27-.37.52-.57.77L96 121.45c7.49 15.22 23.41 31 38.83 38.51l24.34-20.71a8.12 8.12 0 0 1 .75-.56a16 16 0 0 1 15.17-1.4l.13.06l47.11 21.11a16 16 0 0 1 9.55 16.62m-15.88-2h-.11l-47-21.05l-24.35 20.71a8.44 8.44 0 0 1-.74.56a16 16 0 0 1-15.75 1.14c-18.73-9.05-37.4-27.58-46.46-46.11a16 16 0 0 1 1-15.7a6.13 6.13 0 0 1 .57-.77L104 87.15l-21-47a.61.61 0 0 1 0-.12A40.2 40.2 0 0 0 48 80a128.14 128.14 0 0 0 128 128a40.21 40.21 0 0 0 40-34.93Z"></path></svg>
                </div>
            </div>
            <div className={styles.textInfo}>
                <h2>Phone</h2>
                <a href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUM}`}>{process.env.NEXT_PUBLIC_PHONE_NUM_FORMATTED}</a>
            </div>
        </div>

        <div className={styles.info}>
            <div className={styles.iconWrapper}>
                <div className={styles.icon}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm3.519 0L12 11.671L18.481 6zM20 7.329l-7.341 6.424a1 1 0 0 1-1.318 0L4 7.329V18h16z"></path></svg>
                </div>
            </div>
            <div className={styles.textInfo}>
                <h2>Email</h2>
                <a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL_ADDRESS}`}>{process.env.NEXT_PUBLIC_EMAIL_ADDRESS}</a>
            </div>
        </div>

        <div className={styles.info}>
            <div className={styles.iconWrapper}>
                <div className={styles.icon}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m-26.37 144h52.74C149 186.34 140 202.87 128 215.89c-12-13.02-21-29.55-26.37-47.89M98 152a145.72 145.72 0 0 1 0-48h60a145.72 145.72 0 0 1 0 48Zm-58-24a87.61 87.61 0 0 1 3.33-24h38.46a161.79 161.79 0 0 0 0 48H43.33A87.61 87.61 0 0 1 40 128m114.37-40h-52.74C107 69.66 116 53.13 128 40.11c12 13.02 21 29.55 26.37 47.89m19.84 16h38.46a88.15 88.15 0 0 1 0 48h-38.46a161.79 161.79 0 0 0 0-48m32.16-16h-35.43a142.39 142.39 0 0 0-20.26-45a88.37 88.37 0 0 1 55.69 45M105.32 43a142.39 142.39 0 0 0-20.26 45H49.63a88.37 88.37 0 0 1 55.69-45M49.63 168h35.43a142.39 142.39 0 0 0 20.26 45a88.37 88.37 0 0 1-55.69-45m101.05 45a142.39 142.39 0 0 0 20.26-45h35.43a88.37 88.37 0 0 1-55.69 45"></path></svg>
                </div>
            </div>
            <div className={styles.textInfo}>
                <h2>Socials</h2>
                <a className={styles.socialIcon} target='_blank' href="https://www.youtube.com/@tonycisneros8888">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20"><path fill="currentColor" d="M11.603 9.833L9.357 8.785C9.161 8.694 9 8.796 9 9.013v1.974c0 .217.161.319.357.228l2.245-1.048c.197-.092.197-.242.001-.334M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10 .4m0 13.5c-4.914 0-5-.443-5-3.9s.086-3.9 5-3.9s5 .443 5 3.9s-.086 3.9-5 3.9"></path></svg>
                </a>

                <a className={styles.socialIcon} target='_blank' href="https://www.tiktok.com/@supernaturalchurch23">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10.01 10.01 0 0 0 12 2m5.939 7.713v.646a.37.37 0 0 1-.38.37a5.364 5.364 0 0 1-2.903-1.108v4.728a3.938 3.938 0 0 1-1.18 2.81a4.011 4.011 0 0 1-2.87 1.17a4.103 4.103 0 0 1-2.862-1.17a3.98 3.98 0 0 1-1.026-3.805c.159-.642.48-1.232.933-1.713a3.58 3.58 0 0 1 2.79-1.313h.82v1.703a.348.348 0 0 1-.39.348a1.918 1.918 0 0 0-1.23 3.631c.27.155.572.246.882.267c.24.01.48-.02.708-.092a1.928 1.928 0 0 0 1.313-1.816V5.754a.359.359 0 0 1 .359-.36h1.415a.359.359 0 0 1 .359.34a3.303 3.303 0 0 0 1.282 2.245a3.25 3.25 0 0 0 1.641.636a.37.37 0 0 1 .338.35z"></path></svg>
                </a>

                <a className={styles.socialIcon} target='_blank' href="https://www.instagram.com/supernaturalchurch23/">
                 <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M13.61 12.243a1.6 1.6 0 1 1-1.56-1.63a1.62 1.62 0 0 1 1.56 1.63"></path><path fill="currentColor" d="M14.763 7.233H9.338a2.024 2.024 0 0 0-2.024 2.024v5.547a2.024 2.024 0 0 0 2.024 2.024h5.425a2.024 2.024 0 0 0 2.024-2.024V9.267a2.026 2.026 0 0 0-2.024-2.034m-2.713 7.723a2.703 2.703 0 1 1 2.642-2.703a2.672 2.672 0 0 1-2.642 2.703m2.936-5.405a.496.496 0 0 1-.496-.506a.506.506 0 1 1 1.012 0a.496.496 0 0 1-.557.506z"></path><path fill="currentColor" d="M12.05 2a10 10 0 1 0-.1 20a10 10 0 0 0 .1-20m6.073 12.702a3.39 3.39 0 0 1-3.41 3.411H9.389a3.392 3.392 0 0 1-3.411-3.41V9.378a3.39 3.39 0 0 1 3.41-3.411h5.325a3.39 3.39 0 0 1 3.41 3.41z"></path></svg>
                </a>

                <a className={styles.socialIcon} target='_blank' href="https://www.facebook.com/supernaturalchurch.mcallen">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M22 12.08a10 10 0 0 1-8.91 9.893V14.8h2.35a.423.423 0 0 0 .422-.37l.254-2.202a.402.402 0 0 0-.402-.465H13.09v-1.8c0-.836.233-1.407 1.428-1.407h1.112a.423.423 0 0 0 .412-.424V6.238a.423.423 0 0 0-.423-.413H13.82a3.482 3.482 0 0 0-3.714 3.81v2.116H8.339a.413.413 0 0 0-.413.424v2.2a.413.413 0 0 0 .413.413h1.767v7.037A10 10 0 0 1 2 12.08a10 10 0 1 1 20 0"></path></svg>
                </a>
            </div>
        </div>
        
    </div>
 </div>
)};