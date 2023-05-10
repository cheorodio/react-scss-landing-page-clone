import './index.css';
import { BiChevronDown, BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
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

      {/* ===================================================== */}
      {/* MAIN */}
      {/* ===================================================== */}
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
          {/* ===================================================== */}
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
        {/* ===================================================== */}
        <section className={styles.testimonialsSection}>
          <div className={styles.testimonialsTextBox}>
            <div>
              <img
                src="https://assets.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c04dece4787_Icon__Curly%20quotes.svg"
                alt="quote"
              />
              <span>
                We hate to brag, but are flattered when our clients do it for
                us.
              </span>
            </div>
            <p>
              "SupportNinja is really responsive and flexible based on our
              needs. But what we're really, really happy about is the Ninjas and
              their commitment to the brand. They're like an extension of our
              team!"
            </p>
            <h6>Sudip Dasgupta</h6>
            <span>Head of Customer Experiences, Product Madness</span>
            <div className={styles.line} />
          </div>
          <div className={styles.circles}>
            <div className={styles.firstCircle} />
            <div />
            <div />
            <div />
          </div>

          <div className={styles.testimonialsButtons}>
            <a href="/#" className={styles.buttonLeft}>
              <BiLeftArrowAlt />
            </a>
            <a href="/#" className={styles.buttonRight}>
              <BiRightArrowAlt />
            </a>
          </div>
        </section>
        {/* ===================================================== */}

        <div className={styles.borderGrey}>
          <img
            className={styles.borderGreyImage}
            src="https://assets.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c7976ce4795_Section%20Curve%2002.svg"
            alt="border"
          />
        </div>

        {/* ===================================================== */}
        <section className={styles.spanningSection}>
          <img
            className={styles.spanningBgImg}
            src="https://assets.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c0fc8ce4798_Globe%20Lines.svg"
            alt="circles"
          />

          <div className={styles.spanningImages}>
            <div className={styles.spanningImage1}>
              <img
                src="https://assets.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c9aa1ce47b2_Avatar__07.webp"
                alt="profile avatar 1"
              />
              <img
                src="https://assets.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0cafddce47aa_Avatar%20Circle__08.svg"
                alt=" red circle"
              />
            </div>
            <div className={styles.spanningImage2}>
              <img
                src="https://assets.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c799cce47ab_Avatar__05.webp"
                alt="profile avatar 2"
              />
              <img
                src="https://assets.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c7314ce479f_Avatar%20Circle__07.svg"
                alt="red circle"
              />
            </div>
            <div className={styles.spanningImage3}>
              <img
                src="https://assets.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0cc7dece47ad_Avatar__04.webp"
                alt="profile avatar"
              />
              <img
                src="https://assets.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c31bace479d_Avatar%20Circle__06.svg"
                alt="red circle"
              />
            </div>
            <div className={styles.spanningImage4}>
              <img
                src="https://assets.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c87d2ce47ac_Avatar__03.webp"
                alt="profile avatar"
              />
              <img
                src="https://assets.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c8974ce479e_Avatar%20Circle__05.svg"
                alt="red circle"
              />
            </div>
          </div>

          <div className={styles.spanningInfo}>
            <h2>Spanning a wider world of talent</h2>
            <p>
              What are the odds that the most qualified people in the world live
              in your zip code? We'll help you see further.
            </p>
            <p>
              A global team extends your presence across time zones and
              languages—which means longer reach, constant uptime, and happier
              customers.
            </p>
            <p className={styles.spanningBold}>
              It's time to go international. No passport required.
            </p>
            <a className={styles.spanningBtn} href="/#">
              Get Started
            </a>
          </div>

          <div className={styles.spanningImages}>
            <div className={styles.spanningImage6}>
              <img
                src="https://assets.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c188ece47af_Avatar__06.webp"
                alt="profile avatar 1"
              />
              <img
                src="https://assets.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c3996ce4799_Avatar%20Circle__04.svg"
                alt=" red circle"
              />
            </div>
            <div className={styles.spanningImage7}>
              <img
                src="https://assets.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c6221ce47b1_Avatar__08.webp"
                alt="profile avatar 2"
              />
              <img
                src="https://assets.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0cc79bce479a_Avatar%20Circle__03.svg"
                alt="red circle"
              />
            </div>
            <div className={styles.spanningImage8}>
              <img
                src="https://assets.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c514bce47ae_Avatar__01.webp"
                alt="profile avatar"
              />
              <img
                src="https://assets.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c88dfce479b_Avatar%20Circle__02.svg"
                alt="red circle"
              />
            </div>
            <div className={styles.spanningImage9}>
              <img
                src="https://assets.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c4f55ce47b0_Avatar__02.webp"
                alt="profile avatar"
              />
              <img
                src="https://assets.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c27d1ce479c_Avatar%20Circle__01.svg"
                alt="red circle"
              />
            </div>
          </div>
        </section>
        {/* ===================================================== */}
        <section className={styles.superpowerSection}>
          <div className={styles.superpowerTitle}>
            <h2 className={styles.h2Title}>Your talent-finding superpower</h2>
            <p>
              We'll tailor our approach and services based on your roadblocks
              and needs.
            </p>
          </div>

          <div className={styles.superpowerSteps}>
            <h3>Get set up in 5 easy steps</h3>
            <div className={styles.superpowerLinks}>
              <a className={styles.superpowerLink1} href="/#">
                Hand-pick your team
              </a>
              <a className={styles.superpowerLink2} href="/#">
                Leave it to us
              </a>
            </div>
            <div className={styles.numberBlocks}>
              <div>
                <h6>1</h6>
                <p>Deep dive with us into your goals and hiring needs.</p>
              </div>
              <div>
                <h6>2</h6>
                <p>
                  Access a private portal with hand-picked talent to browse and
                  shortlist candidates.
                </p>
              </div>
              <div>
                <h6>3</h6>
                <p>Start interviewing.</p>
              </div>
              <div>
                <h6>4</h6>
                <p>Refine your list until you have the right team.</p>
              </div>
              <div>
                <h6>5</h6>
                <p>
                  With us beside you, welcome your new team aboard and prepare
                  for scale!
                </p>
              </div>
            </div>
            <a className={styles.viewMoreBtn} href="/#">
              View Details
            </a>
          </div>
        </section>
        {/* ===================================================== */}
        <section className={styles.storySection}>
          <div className={styles.storyTextBox}>
            <h2 className={styles.h2Title}>
              Our people are <span>people</span> people
            </h2>
            <h6>
              For nearly a decade, we have been scaling companies while
              fostering the growth, wellbeing, and career development of our
              people.
            </h6>
            <p>
              We are proud to comprise such a dynamic group of people spanning
              time zones, languages, and skill sets. And you'll soon discover
              that with us, work isn't transactional—it is our passion.
            </p>
            <a href="/#">Read our story</a>
          </div>

          <div className={styles.storyImageBox}>
            <div className={styles.profileTile}>
              <img
                src="https://assets.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c1677ce47c0_Tile__Man-p-500.png"
                alt="profile shot of a person"
              />
            </div>
            <div className={styles.illustrationTile}>
              <img
                src="https://assets.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c32c6ce47ba_Tile%20Illustrations__Pie%20Chart.webp"
                alt="pie chart illustration"
              />
            </div>

            <div className={styles.relativeStyle1}>
              <div className={`${styles.profileTile} ${styles.profileImage}`}>
                <img
                  src="https://assets.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0cf161ce47c1_Tile__Woman-p-500.png"
                  alt="profile shot of a person"
                />
              </div>
            </div>
            <div className={styles.illustrationTile}>
              <img
                src="https://assets.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0cbdf4ce47b9_Tile%2520Illustrations__Laptop-p-500.png"
                alt="laptop illustration"
              />
            </div>
            <div className={styles.relativeStyle2}>
              <div className={`${styles.profileTile} ${styles.profileImage}`}>
                <img
                  src="https://assets.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c141ace47c2_Tile__Man%25202-p-500.png"
                  alt="profile shot of a person"
                />
              </div>
            </div>
            <div className={styles.illustrationTile}>
              <img
                src="https://assets.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0cb7f6ce47b8_Tile%20Illustrations__Bar%20Chart.webp"
                alt="graph illustration"
              />
            </div>
          </div>
        </section>
        <section className={styles.yourCareerSection}>
          <div className={styles.careerImageBox}>
            <img
              className={styles.careerImage}
              src="https://assets.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c7fc2ce4791_Stock%2520Image__Conference%2520Room-p-1080.webp"
              alt="a person taking in a meeting"
            />
            <div className={styles.careerIllustration}>
              <img
                src="https://assets.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c34dace47c3_Tile%2520Illustrations__Document%25202-p-500.png"
                alt="notes illustration"
              />
            </div>
          </div>
          <div className={styles.careerInfoBox}>
            <h2 className={styles.h2Title}>
              A better way to grow… your career
            </h2>
            <h6>Our passion for growth is fueled by our culture.</h6>
            <p>
              Want to join a global team that prioritizes your progress,
              celebrates your wins, and gives you the opportunity to work with
              the most interesting clients? Check out our openings today.
            </p>
            <a href="/#">View open roles</a>
          </div>
        </section>
        <div className={styles.borderImage3}>
          <img
            src="https://assets.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c211cce4793_Section%20Curve%2003.svg"
            alt=""
          />
        </div>
        <section className={styles.ctaSection}>
          <div className={styles.ctaTextBox}>
            <h2 className={styles.h2Title}>Start building your dream team</h2>
            <p>
              Design a custom outsourcing solution that enables you to enjoy
              ease and ultimate peace of mind. We've got you.
            </p>
            <a href="/#">
              Get Started
              <span>
                <BiRightArrowAlt className={styles.arrowRight} />
              </span>
            </a>
          </div>
          <div className={styles.ctaImageBox}>
            <img
              src="https://assets.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0cc4e1ce4794_Character%2520Illustration__Footer-CTA-p-800.webp"
              alt="illustration of people"
            />
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
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
            <a href="/#">
              Get Started
              <span>
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
      </footer>
    </>
  );
}
