import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Card from '../components/Card';

export const query = graphql`
  query {
    file(relativePath: { eq: "avatar.jpg" }) {
      id
    }
  }
`;

const IndexPage = () => {
  console.log(query);

  return (
    <Layout>
      <SEO title="Адвокат Андреев Сергей Сергеевич" />
      <Card>
        <h2>Cопровождение сделок с недвижимостью любой сложности в Геленджике</h2>

        <Link
          style={{
            fontWeight: 'bold',
            color: 'rgb(255, 102, 0)',
          }}
          to="/soprovojdenie-sdelok-s-ndvijimostiy-in-gelendzhik"
        >
          Читать подробнее
        </Link>
      </Card>
      <Card>
        <h2>Представительство в суде города Геленджика</h2>

        <Link
          style={{
            fontWeight: 'bold',
            color: 'rgb(255, 102, 0)',
          }}
          to="/predstavitelstvo-v-sude-gelendzhik"
        >
          Читать подробнее
        </Link>
      </Card>
      <Card>
        <h2>
          Составление исковых заявлений, жалоб, претензий в городе Геленджике
        </h2>
        <Link
          style={{
            fontWeight: 'bold',
            color: 'rgb(255, 102, 0)',
          }}
          to="/sostavlenie-iskovih-zayavlenii"
        >
          Читать подробнее
        </Link>
      </Card>

      <Card>
        <h2>
          Юридическая консультация в городе Геленджике
        </h2>
        <Link
          style={{
            fontWeight: 'bold',
            color: 'rgb(255, 102, 0)',
          }}
          to="/yridicheskaya-konsultacia-gelendzhik"
        >
          Читать подробнее
        </Link>
      </Card>

      <Card>
        <h2>
          Составление договоров купли-продажи, мены, дарения в городе Геленджике
        </h2>
        <Link
          style={{
            fontWeight: 'bold',
            color: 'rgb(255, 102, 0)',
          }}
          to="/sostavlenie-dogovorov-gelendzhik"
        >
          Читать подробнее
        </Link>
      </Card>
    </Layout>
  );
};

export default IndexPage;
