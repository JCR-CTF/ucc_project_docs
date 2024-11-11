import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Building Resilience, Empowering Defense

        In an era of rapidly evolving cyber threats, the Uganda National Cyber Range serves as a dedicated, state-of-the-art platform to enhance our nation’s cyber defense capabilities. Designed to simulate real-world cyber environments, this range is a safe, controlled space for cybersecurity training, testing, and research.
      </>
    ),
  },
  {
    title: 'Cyber Labs',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
      UCC Cyber Drill's Cyber Labs offer a hands-on training environment where participants can engage in real-world cybersecurity simulations. Designed to simulate attack and defense scenarios, these labs empower users to sharpen their skills, test strategies, and improve their resilience against evolving cyber threats.
      </>
    ),
  },
  {
    title: 'Powered by Uganda Communication Commission',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
    The UCC Cyber Drill platform is powered by the Uganda Communication Commission (UCC), driving the nation's efforts to enhance cybersecurity awareness and defense. Through strategic partnerships and innovation, UCC provides the infrastructure and support to develop effective cyber training and simulation platforms that empower individuals and organizations to combat cyber threats.
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
