import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./theme-toggle";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Link className={styles.wordmark} href="/" aria-label="NILO, inicio">
          nilo
        </Link>
        <ThemeToggle />
      </header>

      <main className={styles.hero}>
        <section className={styles.message} aria-labelledby="welcome-heading">
          <h1 id="welcome-heading">Hola, soy Nilo.</h1>
          <p>Te ayudo a encontrar lo que buscas y elegir con más confianza.</p>
        </section>

        <div className={styles.illustration} aria-hidden="true">
          <Image
            className={styles.mascot}
            src="/NiloPet.png"
            alt=""
            width={2048}
            height={2048}
            priority
          />
        </div>
      </main>
    </div>
  );
}
