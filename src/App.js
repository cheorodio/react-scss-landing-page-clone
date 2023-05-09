import './index.css';
import styles from './App.module.scss';

export default function App() {
  return (
    <>
      <header>
        <div className={styles.promoBar}>
          <span>Bolton Remote is now a part of SupportNinja!</span>
          <a href="/#">Read about the acquisition.</a>
        </div>

        <nav className={styles.navBar}>
          <a href="/#" className={styles.logo}>
            <img
              src="https://assets.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c9187ce4859_Logomark.svg"
              alt="logo"
            />
            <img
              src="https://assets.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0ceba7ce4866_Wordmark.svg"
              alt="company name"
            />
          </a>
          <ul>
            <li>
              <a href="/#">Solutions</a>
              <a href="/#">How it works</a>
              <a href="/#">About</a>
              <a href="/#">Resources</a>
            </li>
          </ul>
          <div className={styles.rightSection}>
            <a className={styles.ctaButton} href="/#">
              Get Started
            </a>
          </div>
        </nav>
      </header>
      <main>
        <hero className={styles.heroSection}>
          <h1>
            A better way to <span>grow</span>
          </h1>
          <p>Seamlessly scale your team </p>
          <p>and flourish with global outsourced talent.</p>
        </hero>
        <section className={styles.solutionSection}>
          <div>
            <div>
              <h2>Which outsourcing solutions are you looking for?</h2>
              <p>Choose as many as you need.</p>
            </div>
            <a href="/#">Get Started</a>
          </div>
          <div className={styles.solutionOptions}>
            <div />
            <div />
            <div />
            <div />
            <div />
          </div>
        </section>
      </main>
      <footer></footer>
    </>
  );
}
