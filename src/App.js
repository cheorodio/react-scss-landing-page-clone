import './index.css';
import { BiChevronDown, BiRightArrowAlt } from 'react-icons/bi';
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
          <div className={styles.solutionTitle}>
            <div>
              <h2>Which outsourcing solutions are you looking for?</h2>
              <p>Choose as many as you need.</p>
            </div>
            <a href="/#">
              Get Started{' '}
              <span>
                <BiRightArrowAlt className={styles.arrowRight} />
              </span>
            </a>
          </div>
          <div className={styles.solutionOptions}>
            <label>
              <input type="checkbox" />
              <img
                src="https://assets.website-files.com/64149f79022d0c3ed8ce46e9/64149f79022d0cd6fece4b65_filled_customer_success.webp"
                alt="customer service personel illustration"
              />
              <p>Customer Success</p>
            </label>

            <label>
              <input type="checkbox" />
              <img
                src="https://assets.website-files.com/64149f79022d0c3ed8ce46e9/64149f79022d0c3491ce4b63_filled_technical_support.webp"
                alt="technical support personel illustration"
              />
              <p>Technical Support</p>
            </label>

            <label>
              <input type="checkbox" />
              <img
                src="https://assets.website-files.com/64149f79022d0c3ed8ce46e9/64149f79022d0cce61ce4b6b_filled_content_moderation.webp"
                alt="illustration of content moderator"
              />
              <p>Content Moderation</p>
            </label>

            <label>
              <input type="checkbox" />
              <img
                src="https://assets.website-files.com/64149f79022d0c3ed8ce46e9/64149f79022d0c1bd3ce4b69_filled_data_processing.webp"
                alt="illustration of a data processor"
              />
              <p>Data Processing</p>
            </label>

            <label>
              <input type="checkbox" />
              <img
                src="https://assets.website-files.com/64149f79022d0c3ed8ce46e9/64149f79022d0c23dece4b67_filled_professional_services.webp"
                alt="illustration service personel"
              />
              <p>Professional Services</p>
            </label>
          </div>
          <div className={styles.companiesSection}>
            <h2>Championing from behind the scenes of 200+ companies.</h2>
            <div>
              <img
                src="https://assets.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c5debce483c_Customer%20Logo__Flexport.svg"
                alt="flecport logo"
              />
              <img
                src="https://assets.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c0380ce484b_B%26MG_foundation.svg"
                alt="Bill and Melinda Gates Foundation logo"
              />
              <img
                src="https://assets.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0ca0dfce483b_Customer%20Logo__happysocks.svg"
                alt="Happy socks logo"
              />
              <img
                src="https://assets.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c0a86ce483a_Customer%20Logo__Vidyard.svg"
                alt="vidyad logo"
              />
              <img
                src="https://assets.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0cd632ce484a_redweek.svg"
                alt="red week logo"
              />
              <img
                src="https://assets.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0cd161ce4839_Customer%20Logo__Product%20Madness.svg"
                alt="product madness"
              />
            </div>
          </div>
        </section>
        <div className={styles.border}>
          <img
            className={styles.borderImage}
            src="https://assets.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0cc5c4ce4784_Bottom%20Squiggle.svg"
            alt="border"
          />
        </div>

        <section className={styles.highlightSection}>
          <div>
            <img
              src="https://assets.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c5b45ce4789_Character%2520Illustration__Woman%2520Watering%2520Bar%2520Chart-p-1080.webp"
              alt="illustration of a woman wattering houseplants"
            />
          </div>
          <div>
            <h2>Finally—a natural extension of your team.</h2>
            <p>
              We’re here to help you find capacity again. Free up resources,
              accelerate growth, and solve for scale with access to a
              hand-picked talent pool.
            </p>
            <p>
              Your dedicated new team members will become experts in your
              world—your customers, your tech, your data, your systems—so they
              can expand on what you’ve built.
            </p>
          </div>
        </section>

        <section className={styles.servicesSection}>
          <div className={styles.servicesTitle}>
            <div>
              <h2>Don’t grow it alone</h2>
              <p>
                Don't let headcount become a headache. We’ll connect you with
                talent that meets your needs.
              </p>
            </div>
            <img
              src="https://assets.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c4794ce4765_Illustration%3DPlant%201.svg"
              alt="illustration of a vase with leaves"
            />
          </div>

          {/* ================================================== */}
          <div className={styles.servicesProducts}>
            <a href="/#">
              <img
                src="https://assets.website-files.com/64149f79022d0c3ed8ce46e9/64149f79022d0c6675ce474a_Solutions%20Icon__Customer%20Service.svg"
                alt="customer service icon"
              />
              <div>
                <h3>Customer Success</h3>
                <p>
                  Provide excellent service at every step of the customer
                  journey.
                </p>
                <br />
                <span>
                  Explore Customer Success
                  <BiRightArrowAlt />
                </span>
              </div>
            </a>
            <a href="/#">
              <img
                src="https://assets.website-files.com/64149f79022d0c3ed8ce46e9/64149f79022d0cb1f3ce472c_Solutions%20Icon__Technical%20Support.svg"
                alt="laptop icon"
              />

              <div>
                <h3>Technical Support</h3>
                <p>
                  Outsource dedicated experts on your business to answer
                  customer questions.
                </p>
                <br />
                <span>
                  Explore Technical Support
                  <BiRightArrowAlt />
                </span>
              </div>
            </a>
            <a href="/#">
              <img
                src="https://assets.website-files.com/64149f79022d0c3ed8ce46e9/64149f79022d0ca966ce478f_icons%3DPencil.svg"
                alt="pen icon"
              />
              <div>
                <h3>Content Moderation</h3>
                <p>
                  Build a thriving online presence with a team specially trained
                  to uphold your community standards.
                </p>{' '}
                <br />
                <span>
                  Explore Content Moderation
                  <BiRightArrowAlt />
                </span>
              </div>
            </a>
            <a href="/#">
              <img
                src="https://assets.website-files.com/64149f79022d0c3ed8ce46e9/64149f79022d0c1b4ace4778_icons%3DData%20Processing.svg"
                alt="settings icon"
              />
              <div>
                <h3>Data Processing</h3>
                <p>
                  Receive analyzed data, specific to how you need it interpreted
                  and presented
                </p>
                <br />
                <span>
                  Explore Data Processing
                  <BiRightArrowAlt />
                </span>
              </div>
            </a>
            <a href="/#">
              <img
                src="https://assets.website-files.com/64149f79022d0c3ed8ce46e9/64149f79022d0cef4dce4763_Solutions%20Icon__Content%20Moderation.svg"
                alt="services icon"
              />
              <div>
                <h3>Professional Services</h3>
                <p>
                  Leave various professional back-office tasks to us, so you can
                  focus on your specialized work.
                </p>
                <br />
                <span>
                  Explore Professional Services
                  <BiRightArrowAlt />
                </span>
              </div>
            </a>
          </div>
        </section>
      </main>
      <footer>
        <p>hi</p>
      </footer>
    </>
  );
}
