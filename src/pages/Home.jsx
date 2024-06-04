import React, { useEffect, useRef, useState } from "react";
import {
  Footer,
  Header,
  Hero,
  HomePageProject,
  KineticOne,
  KineticThree,
  KineticTwo,
  Media,
} from "../components";
import { Link, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { useLenis } from "lenis/react";

const Home = ({ projectName }) => {
  const sectionRef = useRef(null);
  const location = useLocation();
  const lenis = useLenis();
  const [tabIndex, setTabIndex] = useState(true);

  const [isTitleAnimationComplete, setIsTitleAnimationComplete] =
    useState(false);

  useEffect(() => {
    if (
      lenis &&
      projectName &&
      location.pathname === `/${projectName.replace(/\s+/g, "-")}`
    ) {
      lenis.stop();
      setTabIndex(false);
      gsap.to(sectionRef.current, {
        duration: 0.5,
        zIndex: 1,
        maskImage:
          "linear-gradient(transparent -25%,rgb(0, 0, 0) 0%,rgb(0, 0, 0) 100%,transparent 125%,transparent 125%)",
      });
      sectionRef.current.classList.add("on");
    } else {
      setTabIndex(true);
    }
  }, [lenis, location.pathname, projectName]);

  const handleTitleAnimationComplete = () => {
    setIsTitleAnimationComplete(true);
  };

  const handleError = (event) => {
    event.target.setAttribute("data-error", 1);
  };

  return (
    <div id='__nuxt'>
      <main>
        {isTitleAnimationComplete && <Header />}
        <div id='main'>
          <section className='homepage'>
            <Hero
              tabIndex={tabIndex ? "0" : "-1"}
              isTitleAnimationComplete={isTitleAnimationComplete}
              handleTitleAnimationComplete={handleTitleAnimationComplete}
            />
            <div className='homepage-grid grid-padding' data-v-28f4920b=''>
              <div
                className='volet'
                aria-hidden='true'
                data-v-28f4920b=''
              ></div>
              <div className='volet-devant' data-v-28f4920b=''>
                <button
                  aria-label='Close'
                  className='t-big-text'
                  data-v-28f4920b=''
                  data-v-39d6bdbe=''
                  tabIndex='-1'
                >
                  <span data-v-39d6bdbe=''>
                    <span className='translate' data-v-39d6bdbe=''>
                      <span data-v-39d6bdbe=''>Close</span>
                      <span aria-hidden='true' data-v-39d6bdbe=''>
                        Close
                      </span>
                    </span>
                  </span>
                </button>
                <div
                  className='homepage-sentence1'
                  style={{ display: "none" }}
                  data-v-28f4920b=''
                  data-v-bfe01d37=''
                >
                  <p className='sr-only' data-v-bfe01d37=''>
                    Have a break
                  </p>
                  <div
                    className='sentence'
                    aria-hidden='true'
                    data-v-bfe01d37=''
                  >
                    <div data-v-bfe01d37=''>
                      <span data-v-bfe01d37=''>Have</span>
                    </div>
                    <div data-v-bfe01d37=''>
                      <span data-v-bfe01d37=''>A</span>
                      <span data-v-bfe01d37=''>Break</span>
                    </div>
                    <div data-v-bfe01d37=''>
                      <span data-v-bfe01d37=''>Have</span>
                      <span className='spe' data-v-bfe01d37=''>
                        A
                      </span>
                    </div>
                    <div data-v-bfe01d37=''>
                      <span data-v-bfe01d37=''>Have</span>
                      <span className='spe' data-v-bfe01d37=''>
                        A
                      </span>
                    </div>
                    <div data-v-bfe01d37=''>
                      <span data-v-bfe01d37=''>A</span>
                      <span data-v-bfe01d37=''>Break</span>
                    </div>
                  </div>
                </div>
                <div
                  className='homepage-sentence1'
                  style={{ display: "none" }}
                  data-v-28f4920b=''
                  data-v-46f7c167=''
                >
                  <p className='sr-only' data-v-46f7c167=''>
                    Hire us
                  </p>
                  <div
                    className='sentence'
                    aria-hidden='true'
                    data-v-46f7c167=''
                  >
                    <div data-v-46f7c167=''>
                      <span data-v-46f7c167=''>Hire</span>
                    </div>
                    <div data-v-46f7c167=''>
                      <span data-v-46f7c167=''>Us</span>
                      <span data-v-46f7c167=''>Hire</span>
                    </div>
                    <div data-v-46f7c167=''>
                      <span data-v-46f7c167=''>Hire</span>
                      <span className='spe' data-v-46f7c167=''>
                        Hire
                      </span>
                    </div>
                    <div data-v-46f7c167=''>
                      <span data-v-46f7c167=''>Hire</span>
                      <span className='spe2' data-v-46f7c167=''>
                        Us
                      </span>
                    </div>
                    <div data-v-46f7c167=''>
                      <span data-v-46f7c167=''>Us</span>
                      <span data-v-46f7c167=''>Hire</span>
                    </div>
                  </div>
                </div>
                <div
                  className='homepage-sentence1'
                  style={{ display: "none" }}
                  data-v-28f4920b=''
                  data-v-d4c47e20=''
                >
                  <p className='sr-only' data-v-d4c47e20=''>
                    Name your layers
                  </p>
                  <div
                    className='sentence'
                    aria-hidden='true'
                    data-v-d4c47e20=''
                  >
                    <div data-v-d4c47e20=''>
                      <span data-v-d4c47e20=''>Name</span>
                    </div>
                    <div data-v-d4c47e20=''>
                      <span className='spe1' data-v-d4c47e20=''>
                        Your
                      </span>
                    </div>
                    <div data-v-d4c47e20=''>
                      <span className='spe2' data-v-d4c47e20=''>
                        Layers
                      </span>
                    </div>
                    <div data-v-d4c47e20=''>
                      <span className='spe3' data-v-d4c47e20=''>
                        Name
                      </span>
                    </div>
                    <div data-v-d4c47e20=''>
                      <span className='spe2' data-v-d4c47e20=''>
                        Layers
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className='homepage-sentence1'
                  style={{ display: "none" }}
                  data-v-28f4920b=''
                  data-v-9ed0c062=''
                >
                  <p className='sr-only' data-v-9ed0c062=''>
                    ^^ GM
                  </p>
                  <div
                    className='sentence'
                    aria-hidden='true'
                    data-v-9ed0c062=''
                  >
                    <div data-v-9ed0c062=''>
                      <span data-v-9ed0c062=''>^^</span>
                      <span className='spe1' data-v-9ed0c062=''>
                        GM
                      </span>
                    </div>
                    <div data-v-9ed0c062=''>
                      <span className='spe2' data-v-9ed0c062=''>
                        GM
                      </span>
                      <span className='spe3' data-v-9ed0c062=''>
                        ^^
                      </span>
                    </div>
                    <div data-v-9ed0c062=''>
                      <span data-v-9ed0c062=''>GM</span>
                      <span className='spe4' data-v-9ed0c062=''>
                        ^^
                      </span>
                    </div>
                    <div data-v-9ed0c062=''>
                      <span className='spe5' data-v-9ed0c062=''>
                        ^^
                      </span>
                      <span data-v-9ed0c062=''>GM</span>
                    </div>
                    <div data-v-9ed0c062=''>
                      <span data-v-9ed0c062=''>GM</span>
                      <span className='spe1' data-v-9ed0c062=''>
                        GM
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className='homepage-sentence1'
                  style={{ display: "none" }}
                  data-v-28f4920b=''
                  data-v-ac58f798=''
                >
                  <p className='sr-only' data-v-ac58f798=''>
                    How-to make a mill
                  </p>
                  <div
                    className='sentence'
                    aria-hidden='true'
                    data-v-ac58f798=''
                  >
                    <div data-v-ac58f798=''>
                      <span data-v-ac58f798=''>How-to</span>
                    </div>
                    <div data-v-ac58f798=''>
                      <span className='spe1' data-v-ac58f798=''>
                        Make&nbsp;&nbsp;A
                      </span>
                    </div>
                    <div data-v-ac58f798=''>
                      <span data-v-ac58f798=''>A</span>
                    </div>
                    <div data-v-ac58f798=''>
                      <span className='spe2' data-v-ac58f798=''>
                        A
                      </span>
                      <span className='spe3' data-v-ac58f798=''>
                        Mill
                      </span>
                    </div>
                    <div data-v-ac58f798=''>
                      <span data-v-ac58f798=''>Make</span>
                      <span className='spe3' data-v-ac58f798=''>
                        Mill
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <HomePageProject
                tabIndex={tabIndex ? "-1" : "0"}
                handleError={handleError}
                sectionRef={sectionRef}
              />
              <div className='grid-spe' data-v-28f4920b=''>
                <div className='ligne ligne1' data-v-28f4920b=''>
                  <KineticOne tabIndex={tabIndex ? "0" : "-1"} />
                  <div className='cell' data-v-28f4920b=''>
                    <h2 data-v-28f4920b=''>Selected Work</h2>
                  </div>
                </div>
                <div className='ligne ligne2' data-v-28f4920b=''>
                  <div className='cell' data-v-28f4920b=''>
                    <Link
                      to='/internity'
                      className='innerMedia'
                      data-v-28f4920b=''
                      tabIndex={tabIndex ? "0" : "-1"}
                      style={{ pointerEvents: "initial" }}
                    >
                      <span className='index' data-v-28f4920b=''>
                        01
                      </span>
                      <h3 className='t-h3' data-v-28f4920b=''>
                        Internity
                      </h3>
                      <Media handleError={handleError} />
                    </Link>
                  </div>
                  <KineticTwo tabIndex={tabIndex ? "0" : "-1"} />
                </div>
                <div className='ligne ligne3' data-v-28f4920b=''>
                  <div className='cell' data-v-28f4920b=''>
                    <Link
                      to='/student-voting'
                      className='innerMedia'
                      data-v-28f4920b=''
                      tabIndex={tabIndex ? "0" : "-1"}
                      style={{ pointerEvents: "initial" }}
                    >
                      <span className='index' data-v-28f4920b=''>
                        02
                      </span>
                      <h3 className='t-h3' data-v-28f4920b=''>
                        Voting App
                      </h3>
                      <Media handleError={handleError} />
                    </Link>
                  </div>
                </div>
                <div className='ligne ligne4' data-v-28f4920b=''>
                  <div className='cell' data-v-28f4920b=''>
                    <Link
                      className='innerMedia'
                      data-v-28f4920b=''
                      tabIndex={tabIndex ? "0" : "-1"}
                      style={{ pointerEvents: "initial" }}
                    >
                      <span className='index' data-v-28f4920b=''>
                        03
                      </span>
                      <h3 className='t-h3' data-v-28f4920b=''>
                        Benjamin Righetti
                      </h3>
                      <Media handleError={handleError} />
                    </Link>
                  </div>
                </div>
                <div className='ligne ligne5' data-v-28f4920b=''>
                  <div className='cell' data-v-28f4920b=''>
                    <Link
                      className='innerMedia'
                      data-v-28f4920b=''
                      tabIndex={tabIndex ? "0" : "-1"}
                      style={{ pointerEvents: "initial" }}
                    >
                      <span className='index' data-v-28f4920b=''>
                        04
                      </span>
                      <h3 className='t-h3' data-v-28f4920b=''>
                        Vendredi Society
                      </h3>
                      <Media handleError={handleError} />
                    </Link>
                  </div>
                  <KineticThree tabIndex={tabIndex ? "0" : "-1"} />
                </div>
                <div className='ligne ligne6' data-v-28f4920b=''>
                  <div className='cell' data-v-28f4920b=''>
                    <Link
                      className='innerMedia'
                      data-v-28f4920b=''
                      tabIndex={tabIndex ? "0" : "-1"}
                      style={{ pointerEvents: "initial" }}
                    >
                      <span className='index' data-v-28f4920b=''>
                        05
                      </span>
                      <h3 className='t-h3' data-v-28f4920b=''>
                        Field Day Sound
                      </h3>
                      <Media handleError={handleError} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Footer tabIndex={tabIndex ? "0" : "-1"} />
        </div>
      </main>
    </div>
  );
};

export default Home;
