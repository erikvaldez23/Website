
import React from 'react';
import Marquee from 'react-marquee-slider';
import './FrameworkCarousel.css';
import {
  FaReact, FaNodeJs, FaJava, FaAngular, FaPython, FaPhp, FaDocker, FaGitAlt, FaAws,
} from 'react-icons/fa';
import { SiFirebase, SiGraphql, SiShopify, SiMongodb, SiPostgresql, SiMysql, SiRedux, SiKubernetes, SiTailwindcss, SiTypescript, SiJavascript } from 'react-icons/si';

const frameworksRow1 = [
  { name: 'React', icon: <FaReact />, url: 'https://reactjs.org/' },
  { name: 'Node.js', icon: <FaNodeJs />, url: 'https://nodejs.org/' },
  { name: 'Java', icon: <FaJava />, url: 'https://www.java.com/' },
  { name: 'Python', icon: <FaPython />, url: 'https://www.python.org/' },
  { name: 'Firebase', icon: <SiFirebase />, url: 'https://firebase.google.com/' },
  { name: 'AWS', icon: <FaAws />, url: 'https://aws.amazon.com/' },
];

const frameworksRow2 = [
  { name: 'MongoDB', icon: <SiMongodb />, url: 'https://www.mongodb.com/' },
  { name: 'MySQL', icon: <SiMysql />, url: 'https://www.mysql.com/' },
  { name: 'Docker', icon: <FaDocker />, url: 'https://www.docker.com/' },
  { name: 'Kubernetes', icon: <SiKubernetes />, url: 'https://kubernetes.io/' },
  { name: 'TypeScript', icon: <SiTypescript />, url: 'https://www.typescriptlang.org/' },
  { name: 'JavaScript', icon: <SiJavascript />, url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { name: 'Git', icon: <FaGitAlt />, url: 'https://git-scm.com/' },
];
const FrameworkCarousel = () => {
  const fillRow = (row) => {
    const MIN_ITEMS = 30; // Minimum number of items to fill a row
    const repeatedRow = [...row];
    while (repeatedRow.length < MIN_ITEMS) {
      repeatedRow.push(...row); // Add duplicates of the array
    }
    return repeatedRow;
  };

  const fullRow1 = fillRow(frameworksRow1);
  const fullRow2 = fillRow(frameworksRow2);

  return (
    <div className="framework-carousel">
      <h2 className="carousel-title">Expertise</h2>
      <p className="carousel-subtitle">
        We consider ourselves to be technology agnostic, choosing the right tool for the job.
      </p>
      <div className="marquee-wrapper">
        {/* First Row */}
        <Marquee velocity={20} loop={true} direction="ltr">
          {fullRow1.map((framework, index) => (
            <div
              key={`${framework.name}-${index}`}
              className="framework-card"
              onClick={() => window.open(framework.url, '_blank')}
            >
              <div className="framework-icon">{framework.icon}</div>
              <p className="framework-name">{framework.name}</p>
            </div>
          ))}
        </Marquee>

        {/* Second Row */}
        <Marquee velocity={15} loop={true} direction="rtl">
          {fullRow2.map((framework, index) => (
            <div
              key={`${framework.name}-${index}`}
              className="framework-card"
              onClick={() => window.open(framework.url, '_blank')}
            >
              <div className="framework-icon">{framework.icon}</div>
              <p className="framework-name">{framework.name}</p>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default FrameworkCarousel;
