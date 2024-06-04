import React, { useEffect, useRef, useState } from "react";
import projects from "../../data/Projects.json";
import { useNavigate, useLocation } from "react-router-dom";
import gsap from "gsap";
import { useLenis } from "lenis/react";

const HomePageProject = ({ handleError, sectionRef, tabIndex }) => {
  const [isTitleButtonHovered, setIsTitleButtonHovered] = useState(false);
  const [isCloseButtonHovered, setIsCloseButtonHovered] = useState(false);
  const [isNextButtonHovered, setIsNextButtonHovered] = useState(false);
  const [zIndex, setZIndex] = useState(2); // Initial zIndex value
  const navigate = useNavigate();
  const location = useLocation();
  const yToRefs = useRef([]);
  const ficheRefs = useRef([]);
  const lenis = useLenis();

  useEffect(() => {
    yToRefs.current.forEach((ref, index) => {
      if (ref) {
        gsap.to(ref, {
          y: -2481,
          keyframes: [
            { duration: 2, ease: "power1.inOut" },
            { duration: 40, ease: "linear" },
            { duration: 2, ease: "power1.inOut" },
          ],
          repeat: -1,
        });
      }
    });
  }, [yToRefs.current]);

  const handleTitleButtonHover = () => {
    setIsTitleButtonHovered(true);
    setTimeout(() => {
      setIsTitleButtonHovered(false);
    }, 200);
  };

  const handleCloseButtonHover = () => {
    setIsCloseButtonHovered(true);
    setTimeout(() => {
      setIsCloseButtonHovered(false);
    }, 200);
  };

  const handleNextButtonHover = () => {
    setIsNextButtonHovered(true);
    setTimeout(() => {
      setIsNextButtonHovered(false);
    }, 200);
  };

  const handleCloseClick = () => {
    if (sectionRef.current) {
      gsap.to(sectionRef.current, {
        duration: 0.5,
        maskImage:
          "linear-gradient(transparent 100%,rgb(0, 0, 0) 125%,rgb(0, 0, 0) 225%,transparent 250%,transparent 250%)",
        onComplete: () => {
          sectionRef.current.classList.remove("on");
          navigate("/");
          lenis.start();
        },
      });
    }
  };

  const handleNextClick = (index) => {
    if (ficheRefs.current[index]) {
      let nextIndex = (index + 1) % projects.length; // Calculate the index of the next project
      const nextProject = projects[nextIndex]; // Get the next project object
      navigate(`/${nextProject.name.replace(/\s+/g, "-")}`);
      if (zIndex % 2 === 0) {
        ficheRefs.current[nextIndex].classList.toggle("neg2");
      }
      gsap.to(ficheRefs.current[nextIndex], {
        duration: 1,
        zIndex: zIndex, // Set zIndex value
        maskImage:
          "linear-gradient(90deg, transparent -25%, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 100%, transparent 125%, transparent 125%)",
        onComplete: () => {
          setZIndex((prevZIndex) => prevZIndex + 1);
          lenis.stop();
        },
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      className='homepage-fiche'
      data-v-28f4920b
      data-v-afd506cc
      style={{
        maskImage:
          "linear-gradient(transparent 100%,rgb(0, 0, 0) 125%,rgb(0, 0, 0) 225%,transparent 250%,transparent 250%)",
      }}
    >
      {projects?.map((project, index) => {
        const ficheStyle =
          location.pathname === `/${project.name.replace(/\s+/g, "-")}`
            ? {
                maskImage:
                  "linear-gradient(transparent -25%,rgb(0, 0, 0) 0%,rgb(0, 0, 0) 100%,transparent 125%,transparent 125%)",
              }
            : {};

        return (
          <div
            key={project.name}
            className={`fiche fiche${index}`}
            data-url={project.name}
            data-v-afd506cc
            style={ficheStyle}
            ref={(el) => (ficheRefs.current[index] = el)}
          >
            <header
              className='app-header t-big-text'
              data-v-afd506cc
              data-v-41ec62bd
            >
              <button
                aria-label='Rafie Pradipta'
                className={`mesure ${isTitleButtonHovered ? "on" : ""}`}
                data-v-41ec62bd
                data-v-39d6bdbe
                tabIndex={tabIndex}
                onClick={handleCloseClick}
                onMouseEnter={handleTitleButtonHover}
              >
                <span data-v-39d6bdbe>
                  <span className='translate' data-v-39d6bdbe>
                    <span data-v-39d6bdbe>Rafie Pradipta</span>
                    <span aria-hidden='true' data-v-39d6bdbe>
                      Rafie Pradipta
                    </span>
                  </span>
                </span>
              </button>
              <button
                aria-label='Close'
                className={`${isCloseButtonHovered ? "on" : ""}`}
                data-v-41ec62bd
                data-v-39d6bdbe
                tabIndex={tabIndex}
                onClick={handleCloseClick}
                onMouseEnter={handleCloseButtonHover}
              >
                <span data-v-39d6bdbe>
                  <span className='translate' data-v-39d6bdbe>
                    <span data-v-39d6bdbe>Close</span>
                    <span aria-hidden='true' data-v-39d6bdbe>
                      Close
                    </span>
                  </span>
                </span>
              </button>
            </header>
            <div
              data-lenis-prevent-touch
              className='left'
              data-v-afd506cc
              style={{
                translate: "none",
                rotate: "none",
                scale: "none",
                transform: "translate(0px, 0px)",
              }}
            >
              <div
                ref={(el) => (yToRefs.current[index] = el)}
                className='yTo'
                data-v-afd506cc
                style={{
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  transform: "translate(0px, 0px)",
                }}
              >
                <div className='med' data-v-afd506cc>
                  <img
                    src='/images/images.webp'
                    onError={handleError}
                    alt
                    loading='eager'
                    data-nuxt-img
                    srcSet='
                      /images/images.webp 1x,
                      /images/images.webp 2x
                    '
                    data-v-afd506cc
                  />
                </div>
                <div className='med' data-v-afd506cc>
                  <video
                    data-src='https://pub-e27dea8a2a85453d9fc1443136bc82ae.r2.dev/01.mp4'
                    src='https://pub-e27dea8a2a85453d9fc1443136bc82ae.r2.dev/01.mp4'
                    loop
                    muted
                    playsInline
                    data-v-afd506cc
                  ></video>
                </div>
                <div className='med' data-v-afd506cc>
                  <img
                    src='/.netlify/images?fm=webp&amp;url=/img/01/2.png'
                    onError={handleError}
                    alt
                    loading='eager'
                    data-nuxt-img
                    srcSet='
                      /.netlify/images?fm=webp&amp;url=/img/01/2.png 1x,
                      /.netlify/images?fm=webp&amp;url=/img/01/2.png 2x
                    '
                    data-v-afd506cc
                  />
                </div>
                <div className='med' data-v-afd506cc>
                  <img
                    src='/.netlify/images?fm=webp&amp;url=/img/01/3.png'
                    onError={handleError}
                    alt
                    loading='eager'
                    data-nuxt-img
                    srcSet='
                      /.netlify/images?fm=webp&amp;url=/img/01/3.png 1x,
                      /.netlify/images?fm=webp&amp;url=/img/01/3.png 2x
                    '
                    data-v-afd506cc
                  />
                </div>
                <div className='med' data-v-afd506cc>
                  <img
                    src='/.netlify/images?fm=webp&amp;url=/img/01/4.png'
                    onError={handleError}
                    alt
                    loading='eager'
                    data-nuxt-img
                    srcSet='
                      /.netlify/images?fm=webp&amp;url=/img/01/4.png 1x,
                      /.netlify/images?fm=webp&amp;url=/img/01/4.png 2x
                    '
                    data-v-afd506cc
                  />
                </div>
                <div className='med' data-v-afd506cc>
                  <img
                    src='/images/images.webp'
                    onError={handleError}
                    alt
                    loading='eager'
                    data-nuxt-img
                    srcSet='
                      /images/images.webp 1x,
                      /images/images.webp 2x
                    '
                    data-v-afd506cc
                  />
                </div>
                <div className='med' data-v-afd506cc>
                  <video
                    data-src='https://pub-e27dea8a2a85453d9fc1443136bc82ae.r2.dev/01.mp4'
                    src='https://pub-e27dea8a2a85453d9fc1443136bc82ae.r2.dev/01.mp4'
                    loop
                    muted
                    playsInline
                    data-v-afd506cc
                  ></video>
                </div>
                <div className='med' data-v-afd506cc>
                  <img
                    src='/.netlify/images?fm=webp&amp;url=/img/01/2.png'
                    onError={handleError}
                    alt
                    loading='eager'
                    data-nuxt-img
                    srcSet='
                      /.netlify/images?fm=webp&amp;url=/img/01/2.png 1x,
                      /.netlify/images?fm=webp&amp;url=/img/01/2.png 2x
                    '
                    data-v-afd506cc
                  />
                </div>
                <div className='med' data-v-afd506cc>
                  <img
                    src='/.netlify/images?fm=webp&amp;url=/img/01/3.png'
                    onError={handleError}
                    alt
                    loading='eager'
                    data-nuxt-img
                    srcSet='
                      /.netlify/images?fm=webp&amp;url=/img/01/3.png 1x,
                      /.netlify/images?fm=webp&amp;url=/img/01/3.png 2x
                    '
                    data-v-afd506cc
                  />
                </div>
                <div className='med' data-v-afd506cc>
                  <img
                    src='/.netlify/images?fm=webp&amp;url=/img/01/4.png'
                    onError={handleError}
                    alt
                    loading='eager'
                    data-nuxt-img
                    srcSet='
                      /.netlify/images?fm=webp&amp;url=/img/01/4.png 1x,
                      /.netlify/images?fm=webp&amp;url=/img/01/4.png 2x
                    '
                    data-v-afd506cc
                  />
                </div>
              </div>
            </div>
            <div className='right' data-v-afd506cc>
              <div className='top' data-v-afd506cc>
                <h2 data-v-afd506cc>{project.name}</h2>
                <div className='flex' data-v-afd506cc>
                  <div className='col' data-v-afd506cc>
                    <h3 data-v-afd506cc>Info</h3>
                    <p data-v-afd506cc>{project.info}</p>
                  </div>
                  <div className='col' data-v-afd506cc>
                    <div data-v-afd506cc>
                      <h3 data-v-afd506cc>Role</h3>
                      <ul data-v-afd506cc>
                        <li data-v-afd506cc>Concept</li>
                        <li data-v-afd506cc>Art Direction</li>
                        <li data-v-afd506cc>Design</li>
                        <li data-v-afd506cc>Motion</li>
                      </ul>
                    </div>
                    <div data-v-afd506cc>
                      <h3 data-v-afd506cc>Awards</h3>
                      <ul data-v-afd506cc>
                        <li data-v-afd506cc>N/A</li>
                      </ul>
                    </div>
                  </div>
                  <div className='col' data-v-afd506cc>
                    <h3 data-v-afd506cc>Dev</h3>
                    <a
                      href='https://instagram.com/rafiepradipta'
                      target='_blank'
                      data-v-afd506cc
                      tabIndex={tabIndex}
                    >
                      Rafie Pradipta Wiratama Waldan
                    </a>
                  </div>
                </div>
              </div>
              <div className='bottom t-big-text' data-v-afd506cc>
                <span aria-hidden='true' data-v-afd506cc>
                  Soon
                </span>
                <button
                  aria-label='Next'
                  className={`${isNextButtonHovered ? "on" : ""}`}
                  data-v-afd506cc
                  data-v-39d6bdbe
                  tabIndex={tabIndex}
                  onMouseEnter={handleNextButtonHover}
                  onClick={() => handleNextClick(index)}
                >
                  <span data-v-39d6bdbe>
                    <span className='translate' data-v-39d6bdbe>
                      <span data-v-39d6bdbe>Next</span>
                      <span aria-hidden='true' data-v-39d6bdbe>
                        Next
                      </span>
                    </span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default HomePageProject;
