import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'SIMULATION PLATFORM',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Building Resilience, Empowering Defense

        In an era of rapidly evolving cyber threats, the Uganda National Cyber Range serves as a dedicated, state-of-the-art platform to enhance our nation’s cyber defense capabilities. Designed to simulate real-world cyber environments, this range is a safe, controlled space for cybersecurity training, testing, and research.
      </>
    ),
  },
  {
    title: 'CYBER LABS',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Realistic Cyber Simulation Environments: Engage in live-fire cyber exercises that replicate modern cyber threats and testing conditions.
Advanced Training Programs: Access tailored training sessions and courses designed for cybersecurity students, practitioners, and government agencies.
Collaborative Research & Development: Partner with institutions, industry experts, and organizations to drive forward new technologies and methodologies in cybersecurity.
      </>   
    ),
  },
  {
    title: 'Mission',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Our mission is clear:

Train & Equip: To empower the next generation of cybersecurity professionals through rigorous hands-on training exercises, simulated attack scenarios, and cutting-edge cyber defense strategies.
Strengthen Defense: To bolster Uganda's cybersecurity infrastructure, reducing vulnerabilities and enhancing resilience against emerging threats.
Promote Innovation: To support research, innovation, and collaborative solutions that address the unique cybersecurity challenges faced by Uganda and the global community..
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
