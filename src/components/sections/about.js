/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(200px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 20px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      background: transparent;
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = [
    '<JavaScript/>',
    '<hacking_mobile/>',
    '<pentesting/>',
    '<bug_finding/>',
    '<Node.js/>',
    '<WordPress/>',
    '<python>',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">{'<About Me/>'}</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hello! My name is <a>raj vardhan_rathore </a>, and I enjoy creating things that live
              on the internet. My interest in hacking started back in 2017 when I decided to become
              a hacker and computer scientist — turns out i had started learning cyber security in
              many ways that i can after the long time and slowed started learning about programming
              &amp; hacking!
            </p>
            <p>
              In the beginning, I started a blog. Then, after learning to code, I began creating
              apps and websites. It's difficult to find time as a <a>self-taught programmer</a>, so
              I began using WordPress and PHP with SQL and became an expert in the WordPress
              development team. Since then, I've worked as a freelancer. and finished two
              significant projects from the
              <a href="https://virginol.com"> virginol company website</a>,{''}
            </p>
            <p>
              I started doing study on cyber security and obtained a{' '}
              <a href="https://zsecurtiy.org/">ZSecurtiy</a>, certification I completed CHE through
              ZSec and obtained other additional certificates through Udemy The master CEH by
              Ec-coounil was something I was currently studying for.
            </p>

            <p>
              Fast forward to now, and I have extensive experience in ethical hacking, as well as
              expertise in <a href="https://blurhacker.com/pentesting/">pentesting</a>,{' '}
              <a>bug discovery</a>, <a>scrpit kiddie </a>, and my major focus these days being
              cryptography.
            </p>

            <p>
              Recently, I also launched a start-up called{' '}
              <a href="https://www.blurhacker.com">Beesec</a> that aims to provide everything
              connected to ethical hacking &amp;cyber security in one location.
            </p>
            <p>Here are a few technologies I have been working with recently:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
