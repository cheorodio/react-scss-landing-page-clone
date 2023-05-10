import './index.css';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import styles from './App.module.scss';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';

export default function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>

      <main>
        {/* ==================== HERO SECTION ==================== */}
        <hero className={styles.heroSection}>
          <div>
            <h1>
              A better way to <span>grow</span>
            </h1>
            <p>Seamlessly scale your team </p>
            <p>and flourish with global outsourced talent.</p>
          </div>
        </hero>

        {/* =============== OUTSOURCING SOLUTION SECTION =============== */}
        <section className={styles.solutionSection}>
          <div className={styles.solutionTitleBox}>
            <div>
              <h3>Which outsourcing solutions are you looking for?</h3>
              <p>Choose as many as you need.</p>
            </div>
            <a className="orange-button" href="/#">
              Get Started{' '}
              <span className="circle-in-btn">
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
          {/* =============== COMPANY LOGOS SECTION =============== */}
          <div className={styles.companiesSection}>
            <h3>Championing from behind the scenes of 200+ companies.</h3>
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
        {/* =============== SQUIGGLY BORDER SECTION =============== */}
        <div className={styles.border}>
          <img
            className={styles.borderImage}
            src="https://assets.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0cc5c4ce4784_Bottom%20Squiggle.svg"
            alt="border"
          />
        </div>
        {/* =============== HIGHLIGHTS SECTION =============== */}
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
        {/* =============== SERVICES SECTION =============== */}
        <section className={styles.servicesSection}>
          <div className={styles.servicesTitle}>
            <div>
              <h2>Don't grow it alone</h2>
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
        {/* =============== TESTIMONIALS SECTION =============== */}
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
        {/* =============== SQUIGGLY BORDER SECTION =============== */}
        <div className={styles.borderGrey}>
          <img
            className={styles.borderGreyImage}
            src="https://assets.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c7976ce4795_Section%20Curve%2002.svg"
            alt="border"
          />
        </div>

        {/* =============== SPANNING SECTION =============== */}
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
            <span>It's time to go international. No passport required.</span>
            <div>
              <a className="green-button" href="/#">
                Get Started
              </a>
            </div>
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
        {/* =============== 5 STEPS SECTION =============== */}
        <section className={styles.superpowerSection}>
          <div className={styles.superpowerTitle}>
            <h2>Your talent-finding superpower</h2>
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
            <a className="green-button" href="/#">
              View Details
            </a>
          </div>
        </section>
        {/* =============== OUR STORY SECTION =============== */}
        <section className={styles.storySection}>
          <div className={styles.storyTextBox}>
            <h2>
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
            <a className="green-button" href="/#">
              Read our story
            </a>
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
        {/* =============== YOUR CAREER SECTION =============== */}
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
            <a className="green-button" href="/#">
              View open roles
            </a>
          </div>
        </section>
        {/* =============== SQUIGGLY BORDER SECTION =============== */}
        <div className={styles.borderImage3}>
          <img
            src="https://assets.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c211cce4793_Section%20Curve%2003.svg"
            alt=""
          />
        </div>
        {/* ================== CTA SECTION ================== */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaTextBox}>
            <h2>Start building your dream team</h2>
            <p>
              Design a custom outsourcing solution that enables you to enjoy
              ease and ultimate peace of mind. We've got you.
            </p>
            <a className="orange-button" href="/#">
              Get Started
              <span className="circle-in-btn">
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
        <Footer />
      </footer>
    </>
  );
}
