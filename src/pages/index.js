import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../layouts/layout';
import { SEO } from '../components';

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
    <SEO
      title="Адвокат в Геленджике Андреев Сергей Сергеевич"
      description="Услуги адвоката в Геленджике. Опыт работы с 1196 года. Представительство в суде г.Геленджика, Новороссийска, Краснодарском краевом суде"
    />

    <h1>Добро пожаловать!</h1>
    <h2>
      Я - профессиональный адвокат города Геленджик Андреев Сергей Сергеевич
    </h2>
    <h3>Опыт работы с 1996 года</h3>

    <p>
      Представительство в суде г.Геленджика, Новороссийска, Краснодарском краевом суде
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
