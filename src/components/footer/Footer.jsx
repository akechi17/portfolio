import React, { useState } from "react";
import FooterTitle from "./FooterTitle";
import FooterLink from "./FooterLink";

const Footer = ({ tabIndex }) => {
  const [clickCount, setClickCount] = useState(0);

  const handleToggleColor = () => {
    // Increment the click count
    setClickCount((prevCount) => prevCount + 1);

    switch (clickCount % 4) {
      case 0:
        document.documentElement.classList.add("colorBis");
        document.body.classList.add("neg");
        break;
      case 1:
        document.documentElement.classList.remove("colorBis");
        break;
      case 2:
        document.documentElement.classList.add("colorBis");
        document.body.classList.remove("neg");
        break;
      case 3:
        document.documentElement.classList.remove("colorBis");
        document.body.classList.remove("neg");
        break;
      default:
        break;
    }
  };

  return (
    <footer className='app-footer' data-v-2819df48=''>
      <div className='grid-padding' data-v-2819df48=''>
        <div className='drawLine say' data-v-2819df48=''>
          <FooterTitle />
        </div>
        <div className='drawLine data' data-v-2819df48=''>
          <h2 className='sr-only' data-v-2819df48=''>
            Say hello
          </h2>
          <p data-v-2819df48=''>
            Cibinong <br data-v-2819df48='' />
            (Bogor/Jawa Barat)
          </p>
          <div data-v-2819df48=''>
            <FooterLink
              tabIndex={tabIndex}
              url='https://x.com/akechicks'
              text='X'
            />
            <FooterLink
              tabIndex={tabIndex}
              url='https://www.instagram.com/rafiepradipta'
              text='Instagram'
            />
            <FooterLink
              tabIndex={tabIndex}
              url='https://www.linkedin.com/in/rafie-pradipta-wiratama-waldan-1717b1254'
              text='Linkedin'
            />
            <FooterLink
              tabIndex={tabIndex}
              url='https://github.com/akechi17'
              text='Github'
            />
            <FooterLink
              tabIndex={tabIndex}
              url='mailto:pradiptarafie17@gmail.com'
              text='Email'
            />
          </div>
          <p className='last' data-v-2819df48=''>
            Coded by <br data-v-2819df48='' />
            <FooterLink
              tabIndex={tabIndex}
              url='https://michaelg.fr'
              text='Rafie Pradipta Wiratama W.'
            />
          </p>
        </div>
        <button
          aria-label='Toggle color'
          data-v-2819df48=''
          tabIndex={tabIndex}
          onClick={handleToggleColor}
        >
          <svg
            className='footer-logo'
            width='1400'
            height='412'
            viewBox='0 0 1400 412'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            data-v-2819df48=''
          >
            <path
              d='M0.542 0.119995H163.87L206.366 43.128V171.64L173.598 204.408L206.366 237.688V379H139.806V245.368L122.398 228.472H67.102V379H0.542V0.119995ZM121.886 179.832L139.806 162.424V60.536L127.518 48.76H67.102V179.832H121.886ZM420.986 271.992H340.09L324.218 379H261.242L324.218 0.119995H439.418L502.394 379H436.858L420.986 271.992ZM413.818 222.328L388.73 48.76H373.37L347.77 222.328H413.818ZM557.042 0.119995H729.074V49.272H623.602V167.032H720.37V217.72H623.602V379H557.042V0.119995ZM777.542 0.119995H844.102V379H777.542V0.119995ZM911.042 0.119995H1081.03V48.248H977.602V157.816H1071.81V205.944H977.602V330.872H1085.63V379H911.042V0.119995Z'
              fill='currentColor'
              data-v-2819df48=''
            />
            <path
              d='M1377.87 75.9135C1364.28 75.9135 1355.69 66.3533 1355.69 53.486C1355.69 40.6187 1364.28 30.9983 1377.87 30.9983C1391.46 30.9983 1400 40.6187 1400 53.486C1400 66.3533 1391.46 75.9135 1377.87 75.9135ZM1377.87 73.5084C1389.6 73.5084 1396.99 64.4893 1396.99 53.486C1396.99 42.4225 1389.6 33.4034 1377.87 33.4034C1366.09 33.4034 1358.69 42.4225 1358.69 53.486C1358.69 64.4893 1366.09 73.5084 1377.87 73.5084ZM1385.15 49.6378C1384.91 48.1948 1383.52 44.1662 1377.93 44.1662C1371.62 44.1662 1369.94 48.6758 1369.94 53.486C1369.94 58.236 1371.62 62.7456 1377.93 62.7456C1383.52 62.7456 1384.91 58.8974 1385.15 57.2139H1389.36C1389 62.5652 1384.91 66.9545 1378.23 66.9545C1370.18 66.9545 1365.73 61.4228 1365.73 53.486C1365.73 45.6093 1369.94 39.9573 1377.75 39.9573C1384.55 39.9573 1388.76 44.3466 1389.36 49.6378H1385.15Z'
              fill='currentColor'
              data-v-2819df48=''
            ></path>
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
