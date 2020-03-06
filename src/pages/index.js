import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import SEO from '../components/seo';

export const query = graphql`
  query {
    file(relativePath: { eq: "avatar.jpg" }) {
      childImageSharp {
        fixed(width: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

const Main = ({ data }) => (
  <Layout>
    <SEO title="Адвокат Андреев Сергей Сергеевич" />

    <h1>Добро пожаловать!</h1>
    <h2>
      Я - профессиональный адвокат города Геленджик Андреев Сергей Сергеевич
    </h2>
    <h3>Опыт работы - 30 лет</h3>

    <p>При звонке сообщите, что нашли мой телефон на моем сайте.</p>
    <p>
      Тогда консультация будет
      {' '}
      <b>бесплатная!</b>
    </p>

    <div
      style={{ textAlign: 'center', borderRadius: '50%', margin: '20px 0' }}
    >
      <Img
        style={{ borderRadius: '50%', maxWidth: '300px' }}
        fixed={data.file.childImageSharp.fixed}
      />
    </div>
  </Layout>
);

export default Main;
