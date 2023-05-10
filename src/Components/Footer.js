import { BiRightArrowAlt } from 'react-icons/bi';
import styles from '../App.module.scss';

export default function Footer() {
  return (
    <>
      <div className={styles.footerLogo}>
        <img
          src="https://assets.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0cd45cce4719_Support%20Ninja%20%7C%20Full%20Logo.svg"
          alt="company logo"
        />
      </div>

      <div className={styles.footerLinks}>
        <div>
          <h3>Solutions</h3>
          <ul>
            <li>
              <a href="/#">Customer Service</a>
            </li>
            <li>
              <a href="/#">Technical Support</a>
            </li>
            <li>
              <a href="/#">Content Moderation</a>
            </li>
            <li>
              <a href="/#">Data Processing</a>
            </li>
            <li>
              <a href="/#">Professional Services</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Company</h3>
          <ul>
            <li>
              <a href="/#">How it Works</a>
            </li>
            <li>
              <a href="/#">About</a>
            </li>
            <li>
              <a href="/#">Careers</a>
            </li>
            <li>
              <a href="/#">Contact</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Resources</h3>
          <ul>
            <li>
              <a href="/#">Resources</a>
            </li>
            <li>
              <a href="/#">FAQs</a>
            </li>
            <li>
              <a href="/#">Glossary</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Follow</h3>
          <ul>
            <li>
              <a href="/#">Facebooks</a>
            </li>
            <li>
              <a href="/#">Twitter</a>
            </li>
            <li>
              <a href="/#">LinkedIn</a>
            </li>
            <li>
              <a href="/#">Instagram</a>
            </li>
            <li>
              <a href="/#">Glassdoor</a>
            </li>
          </ul>
        </div>
        <div className={styles.footerBtn}>
          <a className="orange-button" href="/#">
            Get Started
            <span className="circle-in-btn">
              <BiRightArrowAlt className={styles.arrowRight} />
            </span>
          </a>
        </div>
      </div>
      <div className={styles.copyright}>
        <div>
          <p>
            2023 © SupportNinja, A Registered Trademark Of Ninja Partners Inc
          </p>
        </div>
        <div>
          <ul>
            <li>
              <a href="/#">Privacy Policy</a>
            </li>
            <li>
              <a href="/#">Security Policy</a>
            </li>
            <li>
              <a href="/#">Terms of Use</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
