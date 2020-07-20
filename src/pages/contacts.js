import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../layouts/layout';
import { SEO } from '../components';

export const query = graphql`
  query {
    file(relativePath: { eq: "avatar.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

const Contacts = ({ data }) => (

  <Layout>
    <SEO title="Контакты" />

    <div>

      <h1>Контакты</h1>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 20,
      }}
      >
        <Img style={{ borderRadius: '50%' }} fixed={data.file.childImageSharp.fixed} />
      </div>

      <h2 style={{ opacity: 0.8 }}>
        Андреев Сергей Сергеевич
        Я, всегда рад своим клиентам, приходите, я вас жду!
      </h2>

      <div className="main">
        <p>
          Адрес: г. Геленджик, ул, Рыбникова, д.1
        </p>
        <div>
          <p>Тел.</p>

          <a
            href="tel:8-928-260-26-37"
            style={{
              fontWeight: 'bold',
              color: 'rgb(255, 102, 0)',
            }}
          >
            8-928-260-26-37
          </a>
        </div>
        <div>
          <p>Почта:</p>
          <a
            href="mailto:advokatsea@mail.ru"
            style={{
              fontWeight: 'bold',
              color: 'rgb(255, 102, 0)',
            }}
          >
            advokatsea@mail.ru
          </a>
        </div>

        <div className="map" />
      </div>

    </div>
  </Layout>
);

export default Contacts;
