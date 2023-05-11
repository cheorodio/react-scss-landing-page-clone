import '../index';
import { BiChevronDown } from 'react-icons/bi';
import styles from '../App.module.scss';

export default function NavBar() {
  return (
    <>
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
            <a href="/#">
              Solutions
              <BiChevronDown className={styles.downIcon} />
            </a>
            <a href="/#">How it works</a>
            <a href="/#">
              About <BiChevronDown className={styles.downIcon} />
            </a>
            <a href="/#">Resources</a>
          </li>
        </ul>

        <div className={styles.rightSection}>
          <a className="green-button" href="/#">
            Get Started
          </a>
        </div>
      </nav>
    </>
  );
}
