import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <Image
          className={styles.logo}
          src="/handcraftedHaven.svg"
          alt="Handcrafted Haven logo"
          width={350}
          height={150}
          priority
        />
      </div>
      <div className={styles.hero}>
          <img className={styles.heroImg}
            src="/hero.png"
            alt="Working hands"
          />
          <div className={styles.heroInfo}>
            <div className={styles.heroTitle}>
              <p>Passion in your<br/>
              <strong>HANDS</strong> made<br/>
              <strong>REALITY</strong></p>
            </div>
            <p className={styles.inviteText}>Create / Enjoy / Share / Sell</p>
            <Link
              href={"/dashboard"} 
              className={styles.joinButton}>
              Join NOW!
            </Link>
          </div>
      </div>
    </div>
  );
}
