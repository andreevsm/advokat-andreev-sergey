import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import SEO from '../components/seo';

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
    <SEO title="Home" />

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
          Адрес: 353460 Российская Федерация, Краснодарский край, г. Геленджик, ул. Полевая, № 41
        </p>
        <div>
          <p>Тел.</p>

          <a
            href="tel:+1234567890"
            style={{
              fontWeight: 'bold',
              color: 'rgb(255, 102, 0)',
            }}
          >
            8 (928) 661-70-80,
          </a>
        </div>
        <div>
          <p>Адрес электронной почты:</p>

          <a
            href="mailto:vlad@htmlbook.ru"
            style={{
              fontWeight: 'bold',
              color: 'rgb(255, 102, 0)',
            }}
          >
            futura-777@mail.ru
          </a>
        </div>

        <div className="map" />
      </div>

    </div>
  </Layout>
);

export default Contacts;
