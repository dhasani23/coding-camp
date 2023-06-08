import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    false && 'has-top-divider',
    false && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    false && 'has-top-divider',
    false && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: '',
    paragraph: ''
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xs text-color-primary fw-600 tt-u mb-8">
                  Meet your head instructor
                </div>
                <h3 className="mt-0 mb-12">
                  David Hasani
                </h3>
                <p className="m-0" style={{color:"white"}}>
                  Education: BS, Computer Science & BA, Economics from the <a style={{color:"orange"}} href="https://www.virginia.edu" target="_blank" rel="noopener noreferrer"><u>University of Virginia</u>➚</a> (Summa Cum Laude) <br/> <br/>
                  Experience: Working as a Software Engineer at Amazon. Has tutored computer science and math since high school 
                  (see his reviews <a style={{color:"purple"}} href="https://www.wyzant.com/match/tutor/89209556" target="_blank" rel="noopener noreferrer"><u>here</u>➚</a>)
                  and served as a teaching assistant for 1,000+ students in multiple computer science classes at UVA.
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/david-headshot-modified.png')}
                  alt="Features split 01"
                  width={352}
                  height={264} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xs text-color-primary fw-600 tt-u mb-8">
                  Importance
                </div>
                <h3 className="mt-0 mb-12">
                  Coding is a fundamental skill
                </h3>
                <p className="m-0" style={{color:"white"}}>
                  In today's digital and AI age, coding is an essential skill for everybody.
                  It develops problem-solving and teamwork skills while opening doors to high-paying careers.
                  Studies show that exposure to computer science from a young age is strongly associated with
                  future academic and career success.
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  // imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/investor.png')}
                  alt="Features split 02"
                  width={396}
                  height={297} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xs text-color-primary fw-600 tt-u mb-8">
                  What you will do
                </div>
                <h3 className="mt-0 mb-12">
                  Sample schedule & projects
                  </h3>
                <p className="m-0" style={{color:"white"}}>
                  We currently offer 3 different introductory courses:
                  <p></p>
                  <ul>
                    <li>Intro to Python</li>
                    <li>Intro to Java</li>
                    <li>Intro to JavaScript</li>
                  </ul>
                  
                  If you're not sure what these are or haven't used them, no problem! Choose Python as it is the most beginner-friendly.
                  
                  Once you have completed the introductory course, we also offer 3 different advanced courses:
                  <p></p>
                  <ul>
                    <li>Advanced Python</li>
                    <li>Advanced Java</li>
                    <li>Advanced JavaScript</li>
                  </ul>
                  
                  For each of these courses, over the course of a 2-week long camp, you will participate in 6 interactive and collaborative online, live sessions with David
                  as he walks you through how to build everything from <a style={{color:"purple"}} href="http://youtu.be/v-IjAzJF_i0?hd=1" target="_blank" rel="noopener noreferrer"><u>a HangMan game</u>➚</a>, <a style={{color:"purple"}} href="http://youtu.be/1QwM95ztyhM?hd=1" target="_blank" rel="noopener noreferrer"><u>an AI-powered ChatBot</u>➚</a>, <a style={{color:"purple"}} href="http://youtu.be/ZMR4nlye2iY?hd=1" target="_blank" rel="noopener noreferrer"><u>a WeatherApp</u>➚</a>, and more!
                  Remember: no experience necessary for the introductory courses and we provide everything you need. See example outlines of 2 courses to the right.
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/sample-schedule.png')}
                  alt="Features split 01"
                  width={352}
                  height={264} />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;