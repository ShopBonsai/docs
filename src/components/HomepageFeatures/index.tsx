import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Product Feeds',
    Svg: require('@site/static/img/undraw_spreadsheet_re_cn18.svg').default,
    description: (
      <>
        Product Feeds are the main way to get products from Bonsai into your platform.
        They are updated every 30 minutes and contain all the information you need to
        sell products.
      </>
    ),
  },
  {
    title: 'API',
    Svg: require('@site/static/img/undraw_programmer_re_owql.svg').default,
    description: (
      <>
        The Bonsai API is a RESTful API that allows you to get up-to-date product information,
        generate checkout totals and place orders. It is the most flexible way to integrate with
        Bonsai.
      </>
    ),
  },
  {
    title: 'Images',
    Svg: require('@site/static/img/undraw_window_shopping_re_0kbm.svg').default,
    description: (
      <>
        Images service allows you to fetch product images of various sizes. You can either display
        them on your website or reupload them to your own CDN.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
